import React from 'react';
import styled from 'styled-components';
import Logo from './Elementos-05.png';

const Img = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 30px;
`;
const Palabra = () => {
  return <Img src={Logo} />;
};

export default Palabra;
