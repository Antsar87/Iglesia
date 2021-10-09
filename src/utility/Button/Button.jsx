import React from 'react';
import styled, { css } from 'styled-components';


const Button = styled.button`
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
    props.color === 'primary' &&
    css`
      color: white;
      font-size: 20px;
      padding: 10px;
      background: #0c59b5;
      border-radius: 5px;
    `}

  ${(props) =>
    props.color === 'primary-Bold' &&
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
    props.color === 'yellow-Bold' &&
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


export default Button;
