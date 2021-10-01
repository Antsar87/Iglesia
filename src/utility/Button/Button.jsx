import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  margin-top: 20px;

  ${(props) =>
    props.center === 'center' &&
    css`
      text-align: center;
    `}
`;

const Btn = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  border: none;

  cursor: pointer;
  transition: all 1s ease-in-out;
  display: inline;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) =>
    props.primary === 'primary' &&
    css`
      color: white;
      font-size: 20px;
      padding: 10px;
      background: #0c59b5;
      border-radius: 5px;
    `}

  ${(props) =>
    props.primary === 'primary-Bold' &&
    css`
      color: white;
      font-size: 20px;
      padding: 10px;
      background: #54d7ee;
      border-radius: 5px;
    `}

    & span {
    font-weight: 700;
  }

  ${(props) =>
    props.primary === 'yellow-Bold' &&
    css`
      color: white;
      font-size: 20px;
      padding: 10px;
      background-color: #ffa600ec;
      border-radius: 5px;
    `}

    & span {
    font-weight: 700;
  }

  ${(props) =>
    props.size === 'bold' &&
    css`
      font-size: 25px;
      font-weight: 700;
      padding: 5px;
    `}

  ${(props) =>
    props.size === 'big' &&
    css`
      font-size: 40px;
      font-weight: 700;
      padding: 5px;
    `}
`;

const Button = (props) => {
  return (
    <Container center={props.center}>
      {' '}
      <Btn primary={props.color} size={props.size}>
        {props.children}
      </Btn>
    </Container>
  );
};

export default Button;
