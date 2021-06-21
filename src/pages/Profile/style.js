import styled from 'styled-components';

export const Content = styled.div`
  margin-left: 200px;
  padding: 1px 16px;
`;

export const Container = styled.div`
  margin-left: 15px;
  background-color: #f8f8f8;
  width: 96%;
  padding: 0.8em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3px;

  button {
    background-color: #092532;
    color: #fff;
    height: 25px;
  }

  button:hover {
    background-color: #184d47;
  }
`;

export const LabelAvatar = styled.label`
  display: flex;
  width: 180px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  input {
    display: none;
  }

  span {
    z-index: 99;
    opacity: 0.6;
    position: absolute;
    transition: all 0.3s;
  }

  span:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  img {
    margin-bottom: 6px;
    border-radius: 5px;
    object-fit: cover;
    width: 150px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0.7em;

  input {
    margin-bottom: 1em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
  }
  button {
    max-width: 600px;
    margin-top: 5px;
  }
`;

export const LogoutContainer = styled.div`
  background-color: transparent;
  padding: 8px 20px;
  border: 1px solid #121212;
  font-size: 1.5em;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  border: none;

  button {
    color: #fff;
    background-color: #f00;
    width: 100px;
    border-radius: 3px;
    outline: 0;
    border: 0;
    padding: 1px;
  }
`;
