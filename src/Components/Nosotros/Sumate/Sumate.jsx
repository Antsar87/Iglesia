import React from 'react';
import styled from 'styled-components';
import Button from '../../../utility/Button/Button';
import back from './Elementos-26.jpg';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Background = styled.div`
  background: url(${back}) no-repeat;
  width: 100%;
  height: 200px;
  min-height: 200px;
  margin-top: 30px;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(191, 212, 45);
    background: linear-gradient(#d34b39ab, #d34b39a9);
    z-index: -1;
  }

  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 50px;
`;

const Sumate = () => {
  return (
    <Fade top>
      <Background>
        <Container>
          <Flex>
            <Fade bottom delay={1000}>
              <Title>SÚMATE A LA FAMILIA PALABRA FIEL</Title>
              <Link to="/soynuevo">
                <Button size="big" color="yellow-Bold">
                  CONÉCTATE
                </Button>
              </Link>
            </Fade>
          </Flex>
        </Container>
      </Background>
    </Fade>
  );
};

export default Sumate;
