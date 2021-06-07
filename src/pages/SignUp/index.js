import React, { useState, useContext } from 'react';
import { FiAtSign, FiUnlock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { AuthContext } from '../../contexts/Auth';
import { Container, LogoContainer, Form, Login, Input } from './style';

function SignUpPage() {
  const { signUp, authLoading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleCadaster(e) {
    e.preventDefault();
    if (name !== '' && email !== '' && password !== '') {
      signUp(email, password, name);
    }
  }

  return (
    <Container>
      <Login>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>

        <Form onSubmit={handleCadaster}>
          <h2>Cadaster</h2>

          <Input>
            <FiUser color="#797979" size={30} />
            <input
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </Input>

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
          <button type="submit">
            {authLoading ? 'Loading...' : 'Create account'}
          </button>
        </Form>

        <Link to="/" style={{ margin: 10 }}>
          Already have an account
        </Link>
      </Login>
    </Container>
  );
}

export default SignUpPage;
