import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

import Background from './Elementos-16.jpg';
import Img from './Elementos-17.jpg';

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  height: 300px;
  width: 100%;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  position: relative;
  z-index: 1;

  &:hover img {
    transform: rotate(-5deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#ffa600ec, #ffa600ec);
    z-index: -1;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 100%;
  gap: 30px;
`;

const Foto = styled.img`
  width: 300px;
  height: 250px;
  /* border: 3px solid white; */
  transition: all 1s ease-in-out;
  outline: 10px white solid;
`;

const Text = styled.div`
  color: white;
  height: 100%;

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
      <Flex>
        <Foto src={Img} />
        <Fade right>
          <Text>
            <h1>Quienes Somos</h1>
            <Bounce right cascade>
              <p>
                Palabra Fiel es una gran familia, deseamos rescatar los valores
                espirituales y morales que Dios establece en su Palabra.
                Queremos vivir en amor y en armonía los unos con los otros como
                en el inicio de la iglesia primitiva, todos unánimes, en un
                mismo sentir.
              </p>
            </Bounce>
          </Text>
        </Fade>
      </Flex>
    </Container>
  );
};

export default SobreNosotros;
