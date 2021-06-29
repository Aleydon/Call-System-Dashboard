import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #092532;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #181c2e;
  margin-bottom: 3px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 5px;
  }
`;

export const Login = styled.div`
  border-radius: 5px;
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

  input {
    margin: 7px;
    height: 30px;
    border-radius: 7px;
    flex-direction: row;
    border: none;
    width: 100%;
    padding: 10px;
  }

  h4 {
    text-align: center;
    margin: 5px 0;
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

export const Input = styled.div`
  display: flex;
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #bbb;
  height: 40px;

  background-color: #fff;
  margin-bottom: 5px;

  svg {
    margin-left: 5px;
  }
`;
