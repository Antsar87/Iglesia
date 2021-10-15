import React from 'react';
import styled from 'styled-components';
import Button from '../../../utility/Button/Button';
import Logo from './bible-study.jpg';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { device } from '../../../Responsive/Responsive';

const Container = styled.div`
  margin-top: 30px;

  background: url(${Logo}) center;
  width: 100%;
  height: 370px;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: 8px;

  @media ${device.mobileL} {
    padding: 20px;
    text-align: justify;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(191, 212, 45);
    background: linear-gradient(
      90deg,
      rgba(191, 212, 45, 1) 0%,
      rgba(213, 200, 48, 1) 54%,
      rgba(213, 200, 48, 0) 84%
    );
    z-index: -1;
  }
  & h2 {
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    font-family: Avenir2;

    & span {
      display: inline;
    }

    @media ${device.mobileM} {
      font-size: 25px;

      & span {
        display: block;
      }
    }

    @media ${device.tablet} {
      font-size: 30px;
    }
  }

  & p {
    color: #eeeeee;
    width: 100%;
    font-size: 15px;

    @media ${device.tablet} {
      width: 70%;
    }

    @media ${device.laptop} {
      width: 50%;
    }

    & span {
      font-weight: 700;
      color: white;
    }
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
      <Fade bottom delay={1100}>
        <Flex>
          <h2>
            <span>grupos de</span> crecimiento
          </h2>

          <p>
            Tratemos de ayudarnos unos a otros, y de amarnos y hacer lo bueno.
            No dejemos de reunirnos, como hacen algunos. Al contrario,
            animémonos cada vez más a seguir confiando en Dios, y más aún cuando
            ya vemos que se acerca el día en que el Señor juzgará a todo el
            mundo.
            <span> Hebreos 10:24-25 (TLA)</span>
          </p>
          <p>
            Si aún no cuentas con un grupo de crecimiento, únete a uno llenando
            tu información haciendo clic en el botón.
          </p>

          <div>
            <Link to="/gruposdecrecimiento">
              <Button color="primary" size="bold">
                ir a formulario
              </Button>
            </Link>
          </div>
        </Flex>
      </Fade>
    </Container>
  );
};

export default Grupos;
