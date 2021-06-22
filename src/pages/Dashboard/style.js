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
    float: right;
    margin-bottom: 1.2em;
    background-color: #83bf02;
    color: #fff;
    border: 0;
    padding: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    transition: 0.9ms;
    border-radius: 5px;
  }

  a:hover {
    background-color: #5fd204;
    transform: scale(1.1);
  }

  svg {
    margin-right: 5px;
    margin-left: 5px;
  }
`;
