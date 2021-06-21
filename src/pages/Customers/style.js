import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 200px;
  padding: 1px 16px;
`;

export const Content = styled.div`
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
    width: 250px;
  }

  button:hover {
    background-color: #184d47;
  }

  input {
    width: 300px;
    height: 20px;
    padding: 5px;
    margin-top: 5px;
    border: 0;
    border-radius: 5px;
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
    width: 300px;
  }
`;
