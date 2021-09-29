import React from 'react';
import styled from 'styled-components';
import Logo from './Elementos-10.png';
import Logo1 from './Elementos-11.png';
import Logo2 from './Elementos-12.png';
import Logo3 from './Elementos-13.png';
import Carousel from 'react-elastic-carousel';

import Fade from 'react-reveal/Fade';

const Container = styled.div`
  margin-top: 30px;
  padding: 20px 0;
  background: #ddd;
  text-align: center;

  & h2 {
    text-transform: uppercase;
    color: #5aa3e7;
    font-size: 40px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Img = styled.img`
  width: 280px;
`;

const Agenda = () => {
  const galery = [
    { img: Logo, id: '1' },
    { img: Logo1, id: '2' },
    { img: Logo2, id: '3' },
    { img: Logo3, id: '4' },
  ];
  return (
    <Container>
      <h2>nuestra agenda</h2>

      <Fade right delay={1200}>
        <Flex>
          <Carousel itemsToShow={3} enableMouseSwipe={false}>
            {galery.map(({ img, id }) => (
              <Img src={img} key={id} />
            ))}
          </Carousel>
        </Flex>
      </Fade>
    </Container>
  );
};

export default Agenda;
