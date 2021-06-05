import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #181c2e;
  margin-bottom: 3px;

  img {
    width: 600px;
    height: 200px;
    padding: 30px;
  }
`;

export const Login = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e3e3e3;
`;

export const Form = styled.form`
  display: flex;
  width: 90%;
  flex-direction: column;

  h2 {
    text-align: center;
    margin: 5px 0;
  }

  input {
    margin: 7px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 7px;
    padding: 6px;
  }

  button {
    margin: 7px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 7px;
    padding: 6px;
    font-weight: bold;
  }

  button:hover {
    background-color: #181c2e;
    color: #fff;
  }
`;
