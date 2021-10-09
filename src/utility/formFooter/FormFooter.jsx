import React from 'react';
import styled from 'styled-components';

const MainText = styled.p`
  color: #0c59b5;
  font-weight: 700;

`;

const SecText = styled.p`
  color: #575756;
  font-style: italic;
  font-weight: 700;
`;

const FormFooter = (props) => {
  return (
    <>
      {props.tipo === 'Main' ? (
        <MainText>{props.children}</MainText>
      ) : (
        <SecText>{props.children}</SecText>
      )}
    </>
  );
};

export default FormFooter;
