import React from 'react';
import { FiUser } from 'react-icons/fi';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { Container, Content } from './style';

function Customers() {
  return (
    <>
      <Header />
      <Container>
        <Title name="Customers">
          <FiUser size={25} color="#000" />
        </Title>
        <Content />
      </Container>
    </>
  );
}

export default Customers;
