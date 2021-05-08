import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { Container, LogoContainer, Form, Login } from './style';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleCadaster(e) {
    e.preventDefault();
    console.log('hueue');
  }

  return (
    <Container>
      <Login>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>

        <Form onSubmit={handleCadaster}>
          <h2>Cadaster</h2>

          <input
            type="text"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button type="submit">Create account</button>
        </Form>

        <Link to="/">Already have an account</Link>
      </Login>
    </Container>
  );
}

export default SignUp;
