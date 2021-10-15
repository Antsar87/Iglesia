import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Button from '../../../utility/Button/Button';
import Background from './Elementos-16.jpg';
import Img from './Elementos-17.jpg';
import { Link } from 'react-router-dom';
import { device } from '../../../Responsive/Responsive';

const Container = styled.div`
  margin-top: 30px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  position: relative;
  z-index: 1;

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

  @media ${device.tablet} {
    height: 300px;

    &:hover img {
      transform: rotate(-5deg);
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 30px;

  @media ${device.tablet} {
    align-items: center;
    flex-direction: row;
    padding: 30px;
  }
`;

const Foto = styled.img`
  width: 150px;
  height: 150px;
  /* border: 3px solid white; */
  transition: all 1s ease-in-out;
  outline: 10px white solid;

  @media ${device.tablet} {
    width: 250px;
    height: 230px;
  }
`;

const Text = styled.div`
  color: white;
  height: 100%;
  width: 100%;
  text-align: center;

  & h1 {
    text-transform: uppercase;
    font-family: Avenir2;
  }

  @media ${device.tablet} {
    text-align: justify;

    & h1 {
      text-transform: uppercase;
      font-family: Avenir2;
    }

    & p {
      line-height: 30px;
    }
  }
`;

const SobreNosotros = () => {
  return (
    <Container>
      <Flex>
        <Foto src={Img} />
        <Fade right>
          <Text>
            <h1>QUIÉNES SOMOS</h1>
            <Bounce right cascade>
              <p>
                Palabra Fiel es una gran familia, deseamos rescatar los valores
                espirituales y morales que Dios establece en su Palabra.
                <br />
                Queremos vivir en amor y en armonía los unos con los otros como
                en el inicio de la iglesia primitiva, todos unánimes, en un
                mismo sentir.
              </p>
              <Link to="/quienesSomos">
                <Button color="primary" size="bold">
                  CONOCE MÁS
                </Button>
              </Link>
            </Bounce>
          </Text>
        </Fade>
      </Flex>
    </Container>
  );
};

export default SobreNosotros;
