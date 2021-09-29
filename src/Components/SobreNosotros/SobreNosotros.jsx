import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

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
  width: 100%;
`;

const Text = styled.div`
  color: white;

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            dicta quas, quia animi nisi consequuntur maiores, consectetur
            tempore ut nulla laudantium delectus ab ducimus ipsum eaque facere
            sequi incidunt repellendus odit corporis. Magni exercitationem
            fugiat expedita aut commodi iure error, voluptates dicta omnis
            perspiciatis eligendi saepe. Aut magni voluptatem ipsa.
          </p>
        </Text>
      </Fade>
    </Container>
  );
};

export default SobreNosotros;
