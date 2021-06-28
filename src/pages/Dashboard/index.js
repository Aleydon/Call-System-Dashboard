/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useState } from 'react';
import { FiHome, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/Auth';
import { Container, Content, Table } from './style';

function Dashboard() {
  const [calls, setCalls] = useState([0]);

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
          <Content>
            <Link to="/new">
              <FiPlus size={30} color="#fff" />
              New Call
            </Link>
            <Table>
              <thead>
                <tr>
                  <th scope="collumn">Customer</th>
                  <th scope="collumn">About</th>
                  <th scope="collumn">Status</th>
                  <th scope="collumn">Registered in</th>
                  <th scope="collumn">#</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="customer">Aleydon</td>
                  <td data-label="about">Computer</td>
                  <td data-label="status">
                    <span style={{ backgroundColor: '#5cb85c' }}>Open</span>
                  </td>
                  <td data-label="registered">20/06/2021</td>
                  <td data-label="#">
                    <button
                      type="button"
                      style={{ backgroundColor: '#3583f6' }}
                    >
                      <FiSearch size={17} color="#fff" />
                    </button>
                    <button
                      type="button"
                      style={{ backgroundColor: '#F6A935' }}
                    >
                      <FiEdit2 size={17} color="#fff" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Content>
        )}
      </Container>
    </>
  );
}

export default Dashboard;
