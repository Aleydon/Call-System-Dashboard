/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { Container, Content, Form, FormLabel, Status } from './style';

function New() {
  function handleRegister(e) {
    e.preventDefault();
    alert('heehue');
  }

  return (
    <>
      <Header />
      <Container>
        <Title name="New">
          <FiPlusCircle size={25} color="#000" />
        </Title>
        <Content>
          <Form onSubmit={handleRegister}>
            <FormLabel>
              <label>Customers:</label>
              <select>
                <option value="1" key={1}>
                  Aleydon
                </option>
                <option value="2" key={2}>
                  Fulaninho
                </option>
              </select>

              <label>About: </label>
              <select>
                <option value="1" key={1}>
                  Suport
                </option>
                <option value="2" key={2}>
                  Financial
                </option>
                <option value="3" key={3}>
                  Technical visit
                </option>
              </select>

              <Status>
                <input type="radio" name="radio" value="open" />
                <span>open</span>

                <input type="radio" name="radio" value="progress" />
                <span>progress</span>

                <input type="radio" name="radio" value="closed" />
                <span>closed</span>
              </Status>
            </FormLabel>

            <label>Complement</label>
            <textarea
              cols="5"
              rows="5"
              placeholder="Describe the problem(optional)"
              type="text"
            />
            <button type="submit">Save</button>
          </Form>
        </Content>
      </Container>
    </>
  );
}

export default New;
