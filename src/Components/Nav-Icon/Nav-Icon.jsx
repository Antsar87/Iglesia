import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.png';
import Facebook from './Facebook.png';
import Instagram from './Instagram.png';
import Ticktock from './Ticktock.png';
import Youtube from './Youtube.png';
import { Link } from 'react-router-dom';

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
    <Flex>
      <Link to="/">
        <Img src={Logo} alt="Tu browser no lo soporta" />
      </Link>
      <Flex>
        {info.map(({ link, img, id }) => (
          <a href={link} target="_blank" rel="noreferrer">
            <Icon src={img} key={id} />
          </a>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavIcon;
