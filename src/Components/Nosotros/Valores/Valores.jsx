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
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 20px;

  .box-child-last {
    grid-column: 1 / 3;
  
  }
`;

const BoxText = styled.div`
  text-align: center;

  & h3 {
    color: #ffa600ec;
    font-size: 40px;
    font-family: Avenir2;
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
        <Grid>
          <BoxText className="box-child-first">
            <Fade top>
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
          <BoxText className="box-child-center">
            <Fade top>
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
          <BoxText className="box-child-last">
            <Fade top>
              <h3>Valores</h3>
            </Fade>
            <Fade bottom delay={1100}>
              <p>
                {' '}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                expedita sint animi amet <br/> ab magnam reprehenderit!
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
