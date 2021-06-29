import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 200px;
  padding: 1px 16px;
`;
export const Content = styled.div`
  margin-left: 15px;
  background-color: #f8f8f8;
  width: 96%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    margin: 2em 0;
    font-weight: 600;
    font-size: 1.2em;
  }

  a {
    margin-top: 20px;
    float: right;
    margin-bottom: 1.2em;
    color: #fff;
    border: 0;
    padding: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    transition: 0.9ms;
    border-radius: 5px;
    background-color: #184d47;
  }

  a:hover {
    background-color: #329542;
    transform: scale(1.1);
  }

  svg {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  caption {
    font-size: 1.6em;
    margin: 0.5em 0 0.75em;
  }

  tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.35em;
  }

  th,
  td {
    padding: 0.62em;
    text-align: center;
  }

  th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  button {
    border: 0;
    padding: 5px;
    margin-right: 2px;
    align-items: center;
    display: inline-block;
    border-radius: 4px;
  }

  svg {
    display: flex;
    align-self: center;
  }

  @media screen and (max-width: 600px) {
    border: 0;

    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }
`;

export const Status = styled.span`
  background-color: #00ff00;
  border-radius: 5px;
`;
