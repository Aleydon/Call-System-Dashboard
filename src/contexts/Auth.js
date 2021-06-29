import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem('@loggedUser');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setAuthLoading(false);
      }
      setAuthLoading(false);
    }
    loadStorage();
  }, []);

  function storageUserSave(data) {
    localStorage.setItem('@loggedUser', JSON.stringify(data));
  }

  async function signUp(email, password, name) {
    setAuthLoading(true);
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
            setAuthLoading(false);
            toast.success(`Welcome ${data.name}`, {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined
            });
          });
      })
      .catch((err) => {
        toast.error(`Sign Up Error ${err}`, {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        });
        setAuthLoading(false);
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
        toast.success(`Welcome Back ${data.name}`, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        });
      })
      .catch((err) => {
        toast.error(`Sign In Error ${err}`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        });
        setAuthLoading(false);
      });
  }

  async function signOut() {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('@loggedUser');
        setUser(null);
      })
      .catch((err) => console.log(`SignOut Error ${err}`));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        signOut,
        authLoading,
        setAuthLoading,
        setUser,
        storageUserSave
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
