/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { FiSettings, FiUpload } from 'react-icons/fi';

import Avatar from '../../assets/avatar.png';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/Auth';
import { Content, Container, Form } from './style';

function Profile() {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user && user.name);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [email, setEmail] = useState(user && user.email);

  return (
    <>
      <Header />
      <Content>
        <Title name="Profile">
          <FiSettings color="#000" size={25} />
        </Title>
        <Container>
          <Form>
            <label htmlFor="avatar">
              <span>
                <FiUpload color="#f00" size={30} />
              </span>
              <input type="file" id="avatar" accept="image/*" />
              <br />
              {avatarUrl === null ? (
                <img src={Avatar} alt="avatar" width={150} />
              ) : (
                <img src={avatarUrl} alt="avatar" width={150} />
              )}
            </label>

            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => {}} />

            <label>Email: </label>
            <input type="text" value={email} onChange={(e) => {}} readOnly />
          </Form>
        </Container>
      </Content>
    </>
  );
}

export default Profile;
