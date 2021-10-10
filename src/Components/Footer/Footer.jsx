import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../Menu/Menu';
import Logo from './Elementos-16.png';
import mapa from './Elementos-17.png';

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
  align-items: center;
`;

const FlexTEXT = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 50%;

  & p {
    color: white;
    text-align: end;
    margin: 0 !important;
  }
`;

const Logoimg = styled.img`
  height: 80px;
  cursor: pointer;
`;

const Footer = (props) => {
  const saving = () => {
    props.ejecutar(true);
  };
  return (
    <BackGround>
      <Container>
        <Menu color="white" saving={props.saving} />
        <Flex style={{ margin: '20px 0' }}>
          <Link to="/">
            <Logoimg src={Logo} />
          </Link>

          <FlexTEXT>
            <p>
              4a. Avenida y 8a. Calle, Lote 13 "A" Colonia Kennedy, Zona 18
              Guatemala, Guatemala
            </p>

            <div onClick={saving}>
              <Logoimg src={mapa} />
            </div>
          </FlexTEXT>
        </Flex>
      </Container>
    </BackGround>
  );
};

export default Footer;
