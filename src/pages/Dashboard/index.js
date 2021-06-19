/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { FiHome } from 'react-icons/fi';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/Auth';
import { Container, Content } from './style';

function Dashboard() {
  const { signOut } = useContext(AuthContext);

  function signOutAplicattion() {
    signOut();
  }
  return (
    <>
      <Header />
      <Container>
        <Title name="Dashboard">
          <FiHome color="#000" size={25} />
        </Title>
        <Content />
      </Container>
    </>
  );
}

export default Dashboard;
