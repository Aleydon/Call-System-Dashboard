import React, { useState, useEffect, useContext } from 'react';
import { FiAtSign, FiUnlock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/Auth';
import { Container, LogoContainer, Form, Login, Input } from './style';

function SignIn() {
  const { signIn, authLoading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlelogin(e) {
    e.preventDefault();
    if (email !== '' && password !== '') {
      signIn(email, password);
    }
  }

  return (
    <Container>
      <Login>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>

        <Form onSubmit={handlelogin}>
          <h2>Login</h2>
          <Input>
            <FiAtSign size={30} color="#797979" />
            <input
              type="email"
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </Input>

          <br />
          <Input>
            <FiUnlock size={30} color="#797979" />
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </Input>

          <br />
          <button type="submit">{authLoading ? 'Loading...' : 'Acess'}</button>
        </Form>

        <Link to="/register" style={{ margin: 10 }}>
          Create an account
        </Link>
      </Login>
    </Container>
  );
}

export default SignIn;
