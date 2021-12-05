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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
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
                Queremos vivir en amor y en armonía los unos con los otros como
                en el inicio de la iglesia primitiva, todos unánimes, en un
                mismo sentir. Proclamamos que el centro de nuestro corazón lo
                ocupa nuestro Señor Jesús; que El reina en Palabra Fiel, que su
                Palabra está siendo esparcida en cada rincón, en cada callejón
                de las colonias de la zona 18.
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
                Palabra Fiel es una gran familia, deseamos rescatar los valores
                espirituales y morales que Dios establece en su Palabra.
              </p>
            </Fade>
          </BoxText>
          <BoxText className="box-child-last">
            <Fade top>
              <h3>Valores</h3>
            </Fade>
            <Fade bottom delay={1100}>
              <p>
                Amor <br />
                El amor es uno de los valores más importantes. Es la fuerza que
                nos impulsa para hacer las cosas bien, por eso es considerado un
                valor que tiene muy clara la diferencia entre el bien y el mal.
                Fe <br />
                La fe genuina es creer en lo que Cristo ha hecho por nosotros.
                La fe es confiar en Dios todo el tiempo. Esperanza <br />
                Como cristianos, nuestra esperanza está puesta en Dios.
                Confiamos en que él cumplirá sus promesas y que no nos fallará
                cuando más lo necesitemos. Sobre todas las cosas sabemos que,
                gracias al sacrificio de Jesús en la cruz, tenemos salvación y
                vida eterna.
              </p>
            </Fade>
          </BoxText>
        </Grid>
      </Box>
    </Container>
  );
};

export default Valores;
