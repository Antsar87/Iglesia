import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { device } from '../../../Responsive/Responsive';

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto 40px auto;

  @media ${device.tablet} {
    margin: 30px auto 0 auto;
  }
`;

const Box = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 10px;
  /* row-gap: 20px; */

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);

    .box-child-last {
      grid-column: 1 / 3;
    }
  }
`;

const BoxText = styled.div`
  text-align: center;

  & h3 {
    color: #ffa600ec;
    font-size: 20px;
    font-family: Avenir2;

    @media ${device.tablet} {
      font-size: 40px;
    }
  }

  & p {
    /* line-height: 25px; */
    color: #706f6f;
    font-size: 14px;

    @media ${device.tablet} {
      line-height: 30px;
      font-size: 16px;
    }
  }
`;
const Valores = () => {
  return (
    <Container>
      <Box>
        <Grid>
          <BoxText className="box-child-first">
            <Fade top>
              <h3>Visión</h3>
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
          <BoxText className="box-child-center">
            <Fade top>
              <h3>Misión</h3>
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
          <BoxText className="box-child-last">
            <Fade top>
              <h3>Valores</h3>
            </Fade>
            <Fade bottom delay={1100}>
              <p>
                {' '}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                expedita sint animi amet <br /> ab magnam reprehenderit!
                Dignissimos nisi adipisci fuga?
              </p>
            </Fade>
          </BoxText>
        </Grid>
      </Box>
    </Container>
  );
};

export default Valores;
