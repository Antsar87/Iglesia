import React from 'react';
import styled from 'styled-components';
import Button from '../../utility/Button/Button';
import Logo from './Elementos-07.jpg';

const Container = styled.div`
  background: url(${Logo}) center;
  height: 509px;
  width: 100%;
  margin-top: 30px;
`;

const Box = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Conectate = () => {
  return (
    <Container>
      <Box>
        <Button size="big" color="primary-Bold" center="center">
          Conectate <span>aqui</span>
        </Button>
      </Box>
    </Container>
  );
};

export default Conectate;
