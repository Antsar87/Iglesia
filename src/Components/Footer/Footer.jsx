import React from 'react';
import { Link } from 'react-router-dom';
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
  cursor: pointer;
`;

const Footer = (props) => {
  const saving = () => {
    props.ejecutar(true);
  };
  return (
    <BackGround>
      <Container>
        <Menu color="white" />
        <Flex style={{ margin: '20px 0' }}>
          <Link to="/">
            <Logoimg src={Logo} />
          </Link>

          <FlexTEXT>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              placeat labore corrupti rem nisi consectetur nesciunt assumenda
              optio. Illo, deleniti!
            </p>

            <Mapaimg src={Mapa} onClick={saving} />
          </FlexTEXT>
        </Flex>
      </Container>
    </BackGround>
  );
};

export default Footer;
