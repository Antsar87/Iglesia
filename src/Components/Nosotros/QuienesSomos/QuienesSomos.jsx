import React from 'react';

import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Background = styled.div`
  margin-top: 30px;
  background-color: #ffa600ec;

  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Box = styled.div`
  padding: 20px;
  text-align: center;
  color: white;

  & h3 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 40px;
    font-family: Avenir2;
  }

  & p:not(:last-child) {
    margin-bottom: 10px;
    
  }
`;

const QuienesSomos = () => {
  return (
    <Fade top>
      <Background>
        <Container>
          <Fade bottom delay={1050}>
            <Box>
              <h3>quiénes somos</h3>
              <p>
                Palabra Fiel es una gran familia, deseamos rescatar los valores
                espirituales y morales que Dios establece en su Palabra.
              </p>
              <p>
                Queremos vivir en amor y en armonía los unos con los otros como
                en el inicio de la iglesia primitiva, todos unánimes, en un
                mismo sentir. Proclamamos que el centro de nuestro corazón lo
                ocupa nuestro Señor Jesús; que El reina en Palabra Fiel, que su
                Palabra está siendo esparcida en cada rincón, en cada callejón
                de las colonias de la zona 18.
              </p>
            </Box>
          </Fade>
        </Container>
      </Background>
    </Fade>
  );
};

export default QuienesSomos;
