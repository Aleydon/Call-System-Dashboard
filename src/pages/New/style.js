import styled from 'styled-components';

export const Content = styled.div`
  margin-left: 15px;
  background-color: #f8f8f8;
  width: 96%;
  padding: 0.8em;
`;

export const Container = styled.div`
  margin-left: 200px;
  padding: 1px 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3px;

  button {
    background-color: #092532;
    color: #fff;
    height: 25px;
    margin-top: 5px;
    width: 300px;
    margin-left: 9px;
    width: 42%;
  }

  button:hover {
    background-color: #184d47;
  }

  textarea {
    margin-left: 9px;
    height: 105px;
    border: none;
    resize: none;
    margin-top: 10px;
    width: 42%;
    padding: 0.7em;
    margin-bottom: 15px;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  padding: 0.7em;

  select {
    margin-bottom: 1em;
    padding: 0.7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
    margin-top: 5px;
    background-color: #fff;
  }
`;

export const Status = styled.div`
  flex-direction: row;

  input {
    margin-left: 5px;
  }

  span {
    padding-left: 0.5em;
  }

  /* input[type='radio'] {
    margin: 15px 0;
  } */

  /* input[type='raio']:not(:first-child) {
    margin-left: 15px;
  } */
`;
