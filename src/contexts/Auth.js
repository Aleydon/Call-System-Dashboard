import React, { createContext, useState, useEffect } from 'react';

import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('@loggedUser');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  function storageUserSave(data) {
    localStorage.setItem('@loggedUser', JSON.stringify(data));
  }

  async function signUp(email, password, name) {
    setLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        const { uid } = value.user;
        await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .set({ name, avatarUrl: null })
          .then(() => {
            const data = {
              uid,
              name,
              email: value.user.email,
              avatarUrl: null
            };
            setUser(data);
            storageUserSave(data);
            setLoading(false);
          })
          .catch((err) => console.log(`SignUp error: ${err}`));
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  async function signIn(email, password) {
    setAuthLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        const { uid } = value.user;
        const userProfile = await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .get();
        const data = {
          uid,
          name: userProfile.data().name,
          avatarUrl: userProfile.data().avatarUrl,
          email: value.user.email
        };
        setUser(data);
        storageUserSave(data);
        setAuthLoading(false);
      })
      .catch((err) => setLoading(false));
  }

  async function signOut() {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('@loggedUser');
        setUser(null);
      })
      .catch((err) => console.log(`SignOut error ${err}`));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signIn,
        signUp,
        signOut,
        authLoading,
        setUser,
        storageUserSave
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
