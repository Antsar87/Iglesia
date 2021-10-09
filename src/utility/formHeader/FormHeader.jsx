import React from 'react';
import styled from 'styled-components';
const Background = styled.div`
  width: 100%;
  height: 100px;

  background: ${(props) =>
    props.color === 'green'
      ? '#12AFAF'
      : props.color === 'blue'
      ? '#0C59B5'
      : props.color === 'yellow'
      ? '#C3C404'
      : '#9873BC'};
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const H3 = styled.h3`
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  font-family: Avenir2;
  margin: 0;
`;

const FormHeader = (props) => {
  return (
    <Background color={props.color}>
      <Center>
        <H3>{props.children}</H3>
      </Center>
    </Background>
  );
};

export default FormHeader;
