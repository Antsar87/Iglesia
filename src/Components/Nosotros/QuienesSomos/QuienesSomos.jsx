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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita recusandae similique quasi rerum ab quod accusantium
                perferendis earum odio quis. Officia aliquid ipsum repudiandae
                consequuntur id exercitationem ex, obcaecati eum.
              </p>
            </Box>
          </Fade>
        </Container>
      </Background>
    </Fade>
  );
};

export default QuienesSomos;
