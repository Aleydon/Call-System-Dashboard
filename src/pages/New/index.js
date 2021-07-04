import React, { useEffect, useState, useContext } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/Auth';
import firebase from '../../services/firebaseConnection';
import { Container, Content, Form, FormLabel, Status } from './style';

function New() {
  const { user } = useContext(AuthContext);
  const [about, setAbout] = useState('Support');
  const [statusRadioButton, setStatusRadioButton] = useState('open');
  const [complement, setComplement] = useState('');
  const [customerSelected, setCustomerSelected] = useState();
  const [customers, setCustomers] = useState([]);
  const [loadCustomers, setLoadCustomers] = useState(false);

  useEffect(() => {
    (async function loadAllCustomers() {
      await firebase
        .firestore()
        .collection('customers')
        .get()
        .then((value) => {
          const customersList = [];

          value.forEach((doc) => {
            customersList.push({
              id: doc.id,
              nameFantasy: doc.data().businessName
            });
          });
          if (customersList.length === 0) {
            toast.error('Sorry No companies found', {
              position: 'top-right',
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined
            });
            setLoadCustomers(false);
            setCustomers([{ id: 0, nameFantasy: 'Sem Clientes' }]);
          }
          setCustomers(customersList);
          setLoadCustomers(false);
          console.log(customers);
        })
        .catch((err) => {
          setCustomers([{ id: 0, nameFantasy: 'Sem Clientes' }]);
          setLoadCustomers(false);
          toast.error(`Customers Error ${err}`, {
            position: 'top-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined
          });
        });
    })();
  }, []);

  function handleChangeCustomers() {}

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
              <label htmlFor="customers">
                Customers:
                <select
                  value={customerSelected}
                  onChange={handleChangeCustomers}
                  id="customers"
                >
                  {customers.map((customer, index) => {
                    return (
                      <option key={customer.id} value={index}>
                        {customer.nameFantasy}
                      </option>
                    );
                  })}
                </select>
              </label>

              <label htmlFor="about">
                About:
                <select value={about} onChange={handleAboutSelect} id="about">
                  <option value="Support">Support</option>
                  <option value="Financial">Financial</option>
                  <option value="Technical Visit">Technical visit</option>
                </select>
              </label>

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

            <label htmlFor="complement">
              <p>Complement</p>
              <textarea
                cols="5"
                rows="5"
                placeholder="Describe the problem (optional)"
                type="text"
                onChange={(e) => setComplement(e.target.value)}
                id="complement"
              />
            </label>
            <button type="submit">Save</button>
          </Form>
        </Content>
      </Container>
    </>
  );
}

export default New;
