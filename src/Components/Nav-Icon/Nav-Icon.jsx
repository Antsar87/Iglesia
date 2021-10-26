import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.png';
import Facebook from './Facebook.png';
import Instagram from './Instagram.png';
import Ticktock from './Ticktock.png';
import Youtube from './Youtube.png';
import { Link } from 'react-router-dom';
import { device } from '../../Responsive/Responsive';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 30px;
`;

const Img = styled.img`
  height: 60px;
  width: 100px;

  @media ${device.mobileL} {
    height: 90px;
  width: 150px;
  }
  @media ${device.tablet} {
    height: 90px;
    width: 200px;
  }
`;

const Icon = styled.img`
  height: 20px;

  @media ${device.mobileM} {
    height: 30px;
  }
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
          <a href={link} target="_blank" rel="noreferrer" key={id}>
            <Icon src={img} />
          </a>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavIcon;
