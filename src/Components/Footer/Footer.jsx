import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';
import Logo from './Elementos-16.png';
import Mapa from './Elementos-17.png';

const BackGround = styled.div`
  background: #0c59b5;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 10px auto 0 auto;
  padding: 1px 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexTEXT = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 60%;

  & p {
    color: white;
    text-align: end;
  }
`;

const Logoimg = styled.img`
  height: 100px;
`;

const Mapaimg = styled.img`
  width: 100px;
`;

const Footer = () => {
  return (
    <BackGround>
      <Container>
        <Menu />
        <Flex style={{ margin: '20px 0' }}>
          <Logoimg src={Logo} />
          <FlexTEXT>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              placeat labore corrupti rem nisi consectetur nesciunt assumenda
              optio. Illo, deleniti!
            </p>

            <Mapaimg src={Mapa} />
          </FlexTEXT>
        </Flex>
      </Container>
    </BackGround>
  );
};

export default Footer;
