import React from 'react';
import styled from 'styled-components';
import Logo from './Elementos-10.png';
import Logo1 from './Elementos-11.png';
import Logo2 from './Elementos-12.png';
import Logo3 from './Elementos-13.png';
import Logo4 from './services.jpg';

import Fade from 'react-reveal/Fade';

import Slider from 'react-slick';

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

const Box = styled.div`
  padding: 50px;

  .slick-prev:before {
    color: blue !important;
  }
  .slick-next:before {
    color: blue !important;
  }
`;

const Img = styled.img`
  width: 280px;
  display: inline !important;
`;

const Agenda = () => {
  const galery = [
    { img: Logo, id: '1' },
    { img: Logo1, id: '2' },
    { img: Logo2, id: '3' },
    { img: Logo3, id: '4' },
    { img: Logo4, id: '5' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container>
      <h2>nuestra agenda</h2>

      <Fade right delay={1200}>
        <Box>
          <Slider {...settings}>
            {galery.map(({ img, id }) => (
              <div>
                <Img src={img} key={id} />
              </div>
            ))}
          </Slider>
        </Box>
      </Fade>
    </Container>
  );
};

export default Agenda;
