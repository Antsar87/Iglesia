import React from 'react';
import styled from 'styled-components';
import Facebook from './Elementos-20.png';
import Instagram from './Elementos-21.png';
import Youtube from './Elementos-22.png';
import Ticktock from './Elementos-23.png';
import Fade from 'react-reveal/Fade';

const Background = styled.div`
  background: #0c59b5;
  margin-top: 30px;
`;

const Container = styled.div``;

const Box = styled.div`
  padding: 20px 0;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
`;

const BoxIcon = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const Logo = styled.img`
  height: 30px;
`;

const Conectate = () => {
  const info = [
    {
      link: 'https://www.facebook.com/ministeriospalabrafiel',
      img: Facebook,
      id: '1',
    },
    {
      link: 'https://www.instagram.com/ministeriospalabrafiel/',
      img: Instagram,
      id: '2',
    },
    {
      link: 'https://www.youtube.com/channel/UCYXBczFMCAQSXoygG9Nt_ng',
      img: Youtube,
      id: '3',
    },
    {
      link: 'https://www.instagram.com/ministeriospalabrafiel/',
      img: Ticktock,
      id: '4',
    },
  ];
  return (
    <Fade top>
      <Background>
        <Container>
          <Box>
            <Fade bottom delay={1000}>
              <Title>conectate con nosotros </Title>
              <BoxIcon>
                {info.map(({ id, img, link }) => (
                  <a target="_blank" href={link} rel="noreferrer">
                    <Logo key={id} src={img} />
                  </a>
                ))}
              </BoxIcon>
            </Fade>
          </Box>
        </Container>
      </Background>
    </Fade>
  );
};

export default Conectate;
