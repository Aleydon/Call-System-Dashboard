import React, { useState, useEffect } from 'react';

import logo from '../../assets/logo.png';
import { Container, LogoContainer, Form, Login } from './style';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlelogin(e) {
    e.preventDefault();
    console.log('hueue');
  }

  return (
    <Container>
      <Login>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>

        <Form onSubmit={handlelogin}>
          <h2>Login</h2>
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
          <button type="submit">Acess</button>
        </Form>

        <a href="/">Create an account</a>
      </Login>
    </Container>
  );
}

export default SignIn;
