/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable import/named */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { FiSettings, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Avatar from '../../assets/avatar.png';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/Auth';
import firebase from '../../services/firebaseConnection';
import {
  Content,
  Container,
  Form,
  LabelAvatar,
  FormLabel,
  LogoutContainer
} from './style';

function Profile() {
  const {
    user,
    signOut,
    setUser,
    storageUserSave,
    authLoading,
    setAuthLoading
  } = useContext(AuthContext);
  const [name, setName] = useState(user && user.name);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [email, setEmail] = useState(user && user.email);
  const [profileImagePhoto, setProfileImagePhoto] = useState(null);

  function handleImage(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        setProfileImagePhoto(image);
        setAvatarUrl(URL.createObjectURL(e.target.files[0]));
      } else {
        setProfileImagePhoto(null);
        return null;
      }
    }
  }

  async function handleImageUpload() {
    setAuthLoading(true);
    const currentUID = user.uid;
    await firebase
      .storage()
      .ref(`images/${currentUID}/${profileImagePhoto.name}`)
      .put(profileImagePhoto)
      .then(async () => {
        await firebase
          .storage()
          .ref(`images/${currentUID}`)
          .child(profileImagePhoto.name)
          .getDownloadURL()
          .then(async (url) => {
            const imageURL = url;
            await firebase
              .firestore()
              .collection('users')
              .doc(user.uid)
              .update({ avatarUrl: imageURL, name })
              .then(() => {
                const data = {
                  ...user,
                  avatarUrl: url,
                  name
                };
                setUser(data);
                storageUserSave(data);
                toast.success('Profile Updated', {
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined
                });
                setAuthLoading(false);
              })
              .catch((err) => {
                toast.error(`Avatar Update Error ${err}`, {
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
          });
      });
  }

  async function handleSave(e) {
    e.preventDefault();
    setAuthLoading(true);
    if (profileImagePhoto === null && name !== '') {
      await firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .update({ name })
        .then(() => {
          const data = {
            ...user
          };
          setUser(data);
          storageUserSave(data);
          toast.success('Profile Updated', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined
          });
          setAuthLoading(false);
        })
        .catch((err) => {
          toast.error(`Profile Update Error ${err}`, {
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
    } else if (name !== '' && profileImagePhoto !== null) {
      handleImageUpload();
    }
  }

  return (
    <>
      <Header />
      <Content>
        <Title name="Profile">
          <FiSettings color="#000" size={25} />
        </Title>
        <Container>
          <Form onSubmit={handleSave}>
            <LabelAvatar htmlFor="avatar">
              <span>
                <FiUpload color="#fff" size={30} />
              </span>
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleImage}
              />
              <br />
              {avatarUrl === null ? (
                <img src={Avatar} alt="avatar" width={150} />
              ) : (
                <img src={avatarUrl} alt="avatar" width={150} />
              )}
            </LabelAvatar>

            <FormLabel>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <label>Email: </label>
              <input
                type="text"
                value={email}
                onChange={(e) => {}}
                disabled
                style={{ cursor: 'not-allowed' }}
              />
              <button type="submit">
                {authLoading ? 'Uploading...' : 'Save'}
              </button>
            </FormLabel>
          </Form>

          <LogoutContainer>
            <button onClick={() => signOut()}>Logout</button>
          </LogoutContainer>
        </Container>
      </Content>
    </>
  );
}

export default Profile;
