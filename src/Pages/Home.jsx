import React from 'react';
import styled from 'styled-components';
import Agenda from '../Components/Agenda/Agenda';
import Conectate from '../Components/Conectate/Conectate';
import Footer from '../Components/Footer/Footer';
import Grupos from '../Components/Grupos/Grupos';
import Menu from '../Components/Menu/Menu';
import NavIcon from '../Components/Nav-Icon/Nav-Icon';
import Palabra from '../Components/Palabra/Palabra';
import SobreNosotros from '../Components/SobreNosotros/SobreNosotros';
import Button from '../utility/Button/Button';
import Rotate from 'react-reveal/Rotate';

const Container = styled.div`
  overflow: hidden;
  max-width: 1200px;
  margin: 10px auto 0 auto;
`;

const Home = () => {
  return (
    <>
      <Container>
        {/* Nav */}
        <NavIcon />
        {/* Nav */}

        {/* Menu */}
        <Menu />
        {/* Menu */}

        {/* Button */}
        <Button color="primary" center="center">
          Peticion de Oracion
        </Button>
        {/* Button */}

        {/* Palabra */}
        <Palabra />
        {/* Palabra */}

        {/* Quienes Somos */}
        <SobreNosotros />
        {/* Quienes Somos */}

        {/* Conectate */}
        <Conectate />
        {/* Conectate */}

        {/* Agenda */}
        <Rotate top left>
          <Agenda />
        </Rotate>
        {/* Agenda */}

        {/* Grupos */}
        <Grupos />
        {/* Grupos */}
      </Container>

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  );
};

export default Home;
