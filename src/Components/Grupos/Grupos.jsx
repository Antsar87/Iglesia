import React from 'react';
import styled from 'styled-components';
import Button from '../../utility/Button/Button';
import Logo from './Elementos-14.jpg';

const Container = styled.div`
  margin-top: 30px;

  background: url(${Logo}) center;
  width: 100%;
  height: 370px;
  padding: 20px;

  & h2 {
    color: white;
    text-transform: uppercase;
    font-size: 30px;
  }

  & p {
    color: #eeeeeeae;
    width: 50%;
  }
`;

const Flex = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Grupos = () => {
  return (
    <Container>
      <Flex>
        <h2>
          grupos de <br /> crecimiento
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor unde
          voluptatem dignissimos iure dolore in ullam aliquam blanditiis quasi,
          voluptate veniam atque velit officiis, esse quo ex dolorem nam vitae?
        </p>
        <Button color="primary" size="bold">
          ir a formulario
        </Button>
      </Flex>
    </Container>
  );
};

export default Grupos;
