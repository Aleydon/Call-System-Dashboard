import styled from 'styled-components';

import capa from '../../assets/cover.jpg';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #092532;
  position: fixed;
  height: 100%;
  overflow: auto;
`;

export const Cover = styled.div`
  background: url(${capa});
  background-color: #181c2e;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
  padding-top: 15px;
  width: 200px;
`;

export const ProfileAvatar = styled.img`
  margin: 0 auto;
  width: 120px;
  height: 120px;
  border-radius: 50px;
  display: block;
  --webkit-filter: drop-shadow(2px 3px 6px #121212);
  filter: drop-shadow(2px 3px 6px #121212);
  object-fit: cover;
`;

export const Menu = styled.div`
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 3px;
    color: #e3e3e3;
    margin-top: 5px;
  }

  a:hover {
    background-color: #184d47;
  }

  a svg {
    margin-right: 1.5em;
    transition: ease-in-out 0.7s;
  }
`;
