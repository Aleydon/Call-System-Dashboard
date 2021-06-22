/* eslint-disable react/button-has-type */
import React, { useContext, useState } from 'react';
import { FiHome, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/Auth';
import { Container, Content } from './style';

function Dashboard() {
  const [calls, setCalls] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <Title name="Dashboard">
          <FiHome color="#000" size={25} />
        </Title>

        {calls.length === 0 ? (
          <Content>
            <span>No calls</span>
            <Link to="/new">
              <FiPlus size={30} color="#fff" />
              New Call
            </Link>
          </Content>
        ) : (
          <>
            <Link to="/profile">Settings</Link>
          </>
        )}
      </Container>
    </>
  );
}

export default Dashboard;
