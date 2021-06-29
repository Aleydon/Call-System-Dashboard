/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { Container, Content, Form, FormLabel, Status } from './style';

function New() {
  const [about, setAbout] = useState('Support');
  const [statusRadioButton, setStatusRadioButton] = useState('open');
  const [complement, setComplement] = useState('');

  function handleAboutSelect(e) {
    setAbout(e.target.value);
    console.log(about);
  }

  function handleStatusChange(e) {
    setStatusRadioButton(e.target.value);
    console.log(statusRadioButton);
  }

  return (
    <>
      <Header />
      <Container>
        <Title name="New">
          <FiPlusCircle size={25} color="#000" />
        </Title>
        <Content>
          <Form>
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
              <select value={about} onChange={handleAboutSelect}>
                <option value="Support" key={1}>
                  Support
                </option>
                <option value="Financial" key={2}>
                  Financial
                </option>
                <option value="Technical Visit" key={3}>
                  Technical visit
                </option>
              </select>

              <Status>
                <input
                  type="radio"
                  value="open"
                  name="status"
                  onChange={handleStatusChange}
                  checked={statusRadioButton === 'open'}
                />
                <span>open</span>

                <input
                  type="radio"
                  value="progress"
                  name="status"
                  onChange={handleStatusChange}
                  checked={statusRadioButton === 'progress'}
                />
                <span>progress</span>

                <input
                  type="radio"
                  value="closed"
                  name="status"
                  onChange={handleStatusChange}
                  checked={statusRadioButton === 'closed'}
                />
                <span>closed</span>
              </Status>
            </FormLabel>

            <label>Complement</label>
            <textarea
              cols="5"
              rows="5"
              placeholder="Describe the problem (optional)"
              type="text"
              onChange={(e) => setComplement(e.target.value)}
            />
            <button type="submit">Save</button>
          </Form>
        </Content>
      </Container>
    </>
  );
}

export default New;
