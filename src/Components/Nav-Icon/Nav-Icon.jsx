import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.png';
import Facebook from './Facebook.png';
import Instagram from './Instagram.png';
import Ticktock from './Ticktock.png';
import Youtube from './Youtube.png';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  height: 50px;
  width: 100px;
`;

const Icon = styled.img`
  height: 30px;
`;

const NavIcon = () => {
  return (
    <Flex>
      <Img src={Logo} alt="Tu browser no lo soporta" />

      <Flex>
        <Icon src={Facebook} />
        <Icon src={Instagram} />
        <Icon src={Youtube} />
        <Icon src={Ticktock} />
      </Flex>
    </Flex>
  );
};

export default NavIcon;
