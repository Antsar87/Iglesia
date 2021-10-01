import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
  max-width: 1200px;
  margin: 30px auto 0 auto;
`;

const Box = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 30px;
`;

const BoxText = styled.div`
  text-align: center;
  height: 150px;
  width: 400px;
  padding-top: 20px;

  & h3 {
    color: #ffa600ec;
    font-size: 40px;
  }

  & p {
    line-height: 30px;
    color: #706f6f;
  }
`;
const Valores = () => {
  return (
    <Container>
      <Box>
        <Flex>
          <BoxText>
            <Fade top >
            <h3>Vision</h3>
            </Fade>
            <Fade bottom delay={1100}>
              <p>
                {' '}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                expedita sint animi amet ab magnam reprehenderit! Dignissimos
                nisi adipisci fuga?
              </p>
            </Fade>
          </BoxText>
          <BoxText>
          <Fade top >
            <h3>Mision</h3>
            </Fade>
            <Fade bottom delay={1100}>
              <p>
                {' '}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                expedita sint animi amet ab magnam reprehenderit! Dignissimos
                nisi adipisci fuga?
              </p>
            </Fade>
          </BoxText>
        </Flex>
        <BoxText>
        <Fade top >
            <h3>Valores</h3>
            </Fade>
            <Fade bottom delay={1100}>
              <p>
                {' '}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                expedita sint animi amet ab magnam reprehenderit! Dignissimos
                nisi adipisci fuga?
              </p>
            </Fade>
        </BoxText>
      </Box>
    </Container>
  );
};

export default Valores;
