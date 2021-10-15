import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import img from './Elementos-10.jpg';
import img1 from './Elementos-11.jpg';
import img2 from './Elementos-12.jpg';
import img3 from './Elementos-13.jpg';
import img4 from './services.jpg';
import img5 from './presentacion.jpg';

import Fade from 'react-reveal/Fade';

import Slider from 'react-slick';
import { device } from '../../../Responsive/Responsive';

const Container = styled.div`
  margin-top: 30px;

  padding: 20px 0;
  background: #dadada;
  text-align: center;

  & h2 {
    text-transform: uppercase;
    color: #5aa3e7;
    font-size: 25px;
    font-family: Avenir2;

    @media ${device.mobileL} {
      font-size: 40px;
    }
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
    { img: img, id: '1' },
    { img: img1, id: '2' },
    { img: img2, id: '3' },
    { img: img3, id: '4' },
    { img: img4, id: '5' },
    { img: img5, link: 'presentacion', id: '6' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container id="agenda">
      <h2>nuestra agenda</h2>

      <Fade right delay={1200}>
        <Box>
          <Slider {...settings}>
            {galery.map(({ img, id, link }) => (
              <Link key={id} to={`Iglesia/${link ? 'presentacion' : ''}`}>
                <Img src={img} />
              </Link>
            ))}
          </Slider>
        </Box>
      </Fade>
    </Container>
  );
};

export default Agenda;
