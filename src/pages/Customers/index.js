/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { Container, Content, Form, FormLabel } from './style';

function Customers() {
  const [businessInput, setBusinessInput] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [address, setAddress] = useState('');

  function cadasterCustomers(e) {
    e.preventDefault();
    alert('test');
  }

  return (
    <>
      <Header />
      <Container>
        <Title name="Customers">
          <FiUser size={25} color="#000" />
        </Title>
        <Content>
          <Form onSubmit={cadasterCustomers}>
            <FormLabel>
              <label>Business:</label>
              <input
                type="text"
                placeholder="business"
                value={businessInput}
                onChange={(e) => setBusinessInput(e.target.value)}
              />
              <label>CNPJ:</label>
              <input
                type="text"
                placeholder="CNPJ"
                value={CNPJ}
                onChange={(e) => setCNPJ(e.target.value)}
              />
              <label>Address:</label>
              <input
                type="text"
                placeholder="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <button type="submit">Cadaster</button>
            </FormLabel>
          </Form>
        </Content>
      </Container>
    </>
  );
}

export default Customers;
