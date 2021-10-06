import React from 'react';
import styled from 'styled-components';
import Button from '../../../utility/Button/Button';
import Logo from './Elementos-06.jpg';
import YT from './YT.png';
import FB from './FB.png';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
  background: url(${Logo}) center no-repeat;
  height: 400px;
  width: 100%;
  margin-top: 30px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  a {
    text-decoration: none;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
`;

const H1 = styled.h1`
  font-weight: 800px;
  font-size: 70px;
  letter-spacing: 2px;
  font-family: Avenir2;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const P = styled.p`
  text-transform: capitalize;
  font-size: 30px;
  margin: 20px 0;
`;

const FlexIcon = styled.div`
  display: flex;
  gap: 40px;
`;

const Icon = styled.img`
  height: 30px;
`;

const Conectate = () => {
  const Info = [
    { id: 1, url: YT },
    { id: 2, url: FB },
  ];
  return (
    <Container>
      <Flex>
        <Fade bottom delay={1100}>
          <Box>
            <H1>iglesia en casa </H1>
            <P>
              {' '}
              domingos - 08:00 a.m. / 10:00 a.m <br /> miercoles - 08:00 p.m
            </P>
            <FlexIcon>
              {Info.map(({ id, url }) => (
                <Icon key={id} src={url} />
              ))}
            </FlexIcon>
          </Box>
          <a
            href="https://palabrafiel.online.church/"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="big" color="primary-Bold" center="center">
              Conectate <span>aqui</span>
            </Button>
          </a>
        </Fade>
      </Flex>
    </Container>
  );
};

export default Conectate;
