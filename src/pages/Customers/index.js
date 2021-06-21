/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';

import Header from '../../components/Header';
import Title from '../../components/Title';
import firebase from '../../services/firebaseConnection';
import { Container, Content, Form, FormLabel } from './style';

function Customers() {
  const [nameFantasy, setnameFantasy] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [address, setAddress] = useState('');

  async function cadasterCustomers(e) {
    e.preventDefault();

    if (nameFantasy !== '' && CNPJ !== '' && address !== '') {
      await firebase
        .firestore()
        .collection('customers')
        .add({
          businessName: nameFantasy,
          cnpj: CNPJ,
          address
        })
        .then(() => {
          setnameFantasy('');
          setCNPJ('');
          setAddress('');
        })
        .catch((err) => console.log(`Business cadaster error ${err}`));
    }
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
              <label>Name Fantasy:</label>
              <input
                required
                type="text"
                placeholder="Name fantasy"
                value={nameFantasy}
                onChange={(e) => setnameFantasy(e.target.value)}
              />
              <label>CNPJ:</label>
              <input
                required
                type="text"
                placeholder="CNPJ"
                value={CNPJ}
                onChange={(e) => setCNPJ(e.target.value)}
              />
              <label>Address:</label>
              <input
                required
                type="text"
                placeholder="Address"
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
