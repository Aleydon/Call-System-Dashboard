import React from 'react';
import { FiSettings } from 'react-icons/fi';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { Content } from './style';

function Profile() {
  return (
    <>
      <Header />
      <Content>
        <Title name="Profile">
          <FiSettings color="#000" size={25} />
        </Title>
      </Content>
    </>
  );
}

export default Profile;
