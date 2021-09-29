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
    color: #eeeeee;
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
          Tratemos de ayudarnos unos a otros, y de amarnos y hacer lo bueno. No
          dejemos de reunirnos, como hacen algunos. Al contrario, animémonos
          cada vez más a seguir confiando en Dios, y más aún cuando ya vemos que
          se acerca el día en que el Señor juzgará a todo el mundo. Hebreos
          10:24-25 (TLA) Si aún no cuentas con un grupo de crecimiento, únete a
          uno llenando tu información haciendo clic en el botón.
        </p>
        <Button color="primary" size="bold">
          ir a formulario
        </Button>
      </Flex>
    </Container>
  );
};

export default Grupos;
