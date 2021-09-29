import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import Logo from './Elementos-06.jpg';

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  background: url(${Logo});
  background-repeat: no-repeat;
  height: 336px;
  width: 100%;
  /* transform: scale(1.4); */
`;

const Box = styled.div`
  width: 70%;
`;

const Text = styled.div`
  color: white;
  width: 90%;

  & h1 {
    text-transform: uppercase;
  }

  & p {
    line-height: 30px;
  }
`;

const SobreNosotros = () => {
  return (
    <Container>
      <Box></Box>
      <Fade right>
        <Text>
          <h1>Quienes Somos</h1>
          <Bounce right cascade>
            <p>
              Palabra Fiel es una gran familia, deseamos rescatar los valores
              espirituales y morales que Dios establece en su Palabra. Queremos
              vivir en amor y en armonía los unos con los otros como en el
              inicio de la iglesia primitiva, todos unánimes, en un mismo
              sentir.
            </p>
          </Bounce>
        </Text>
      </Fade>
    </Container>
  );
};

export default SobreNosotros;
