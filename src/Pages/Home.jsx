// import Agenda from '../Components/Home/Agenda/Agenda';
// import Conectate from '..Components/Home/Conectate/Conectate';
// import Footer from '..Components/Home/Footer/Footer';
// import Grupos from '..Components/Home/Grupos/Grupos';
// import Palabra from '..Components/Home/Palabra/Palabra';
// import SobreNosotros from '..Components/Home/SobreNosotros/SobreNosotros';
// import Button from '../utility/Button/Button';
// import Popup from '..Components/Home/popup/Popup';

import Button from '../utility/Button/Button';
import Palabra from '../Components/Home/Palabra/Palabra';
import SobreNosotros from '../Components/Home/SobreNosotros/SobreNosotros';
import Conectate from '../Components/Home/Conectate/Conectate';
import NosotrosConectate from '../Components/Nosotros/Conectate/Conectate';
import Agenda from '../Components/Home/Agenda/Agenda';
import Grupos from '../Components/Home/Grupos/Grupos';
import Rotate from 'react-reveal/Rotate';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  overflow: hidden;
  max-width: 1200px;
  margin: 10px auto 0 auto;

  a {
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        {/* Button */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/peticiondeoracion">
            <Button color="primary" center="center">
              PETICIÓN DE ORACIÓN
            </Button>
          </Link>
        </div>

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

        {/* Conectate Nostros */}
        <NosotrosConectate />
        {/* Conectate Nostros */}

        {/* Agenda */}
        <Rotate top left>
          <Agenda />
        </Rotate>
        {/* Agenda */}

        {/* Grupos */}
        <Grupos />
        {/* Grupos */}
      </Container>
    </>
  );
};

export default Home;
