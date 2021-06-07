import React, { useContext } from 'react';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

import avatar from '../../assets/avatar.png';
import { AuthContext } from '../../contexts/Auth';
import { Container, Cover, ProfileAvatar } from './style';

function Header() {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Cover>
        <ProfileAvatar
          src={user.avatarUrl === null ? avatar : user.avatarUrl}
          alt="Profile Avatar"
        />
      </Cover>
      <Link to="/dashboard">
        <FiHome size={20} color="#fff" />
        Calls
      </Link>
      <Link to="/dashboard">
        <FiUser size={20} color="#fff" />
        Clients
      </Link>

      <Link to="/profile">
        <FiSettings size={20} color="#fff" /> Settings
      </Link>
    </Container>
  );
}

export default Header;
