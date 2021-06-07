import styled from 'styled-components';

import capa from '../../assets/cover.png';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #181c2e;
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
