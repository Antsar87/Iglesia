import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nosotros from './Pages/Nosotros.jsx';
import NavIcon from './Components/Nav-Icon/Nav-Icon.jsx';
import Menu from './Components/Menu/Menu.jsx';
import styled from 'styled-components';
import Popup from './utility/popup/Popup.jsx';
import Home from './Pages/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import SoyNuevo from './Pages/SoyNuevo.jsx';
import PeticionDeOracion from './Pages/PeticionDeOracion.jsx';
import GruposDeCrecimiento from './Pages/GruposDeCrecimiento.jsx';
import Presentacion from './Pages/Presentacion.jsx';
import Map from './utility/Map/Map.jsx';
import Buttonv2 from './utility/Buttonv2/Buttonv2.jsx';

const Container = styled.div`
  overflow: hidden;
  max-width: 1200px;
  margin: 10px auto 0 auto;
`;

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [mapa, setmapa] = useState(false);

  const [coffe, setcoffe] = useState(false);

  const savemapa = (conseguir) => {
    setmapa(conseguir);
  };

  const savecoffe = (conseguir) => {
    setcoffe(conseguir);
  };
  return (
    <>
      <Popup
        show={coffe}
        onHide={() => setcoffe(false)}
        titulo="Puedes Donar Aqui"
      >
        <Flex>
          <Buttonv2 href="https://www.paypal.com/donate/?hosted_button_id=UUE9G75Y9JMPQ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Para tus Diezmos y Ofrendas presiona aquí
          </Buttonv2>
        </Flex>
      </Popup>

      <Popup
        show={mapa}
        onHide={() => setmapa(false)}
        titulo="Ubicación De la iglesia"
      >
        <Map />
      </Popup>

      <Container>
        {/* Nav */}
        <NavIcon />
        {/* Nav */}

        {/* Menu */}
        <Menu saving={savecoffe} />
        {/* Menu */}
      </Container>

      <Switch>
        <Route exact path="Iglesia/" component={Home} />
        <Route exact path="Iglesia/quienesSomos" component={Nosotros} />
        <Route exact path="Iglesia/soynuevo" component={SoyNuevo} />
        <Route
          exact
          path="Iglesia/peticiondeoracion"
          component={PeticionDeOracion}
        />
        <Route
          exact
          path="Iglesia/gruposdecrecimiento"
          component={GruposDeCrecimiento}
        />
        <Route exact path="Iglesia/presentacion" component={Presentacion} />
      </Switch>

      {/* Footer */}
      <Footer ejecutar={savemapa} saving={savecoffe} />
      {/* Footer */}
    </>
  );
}

export default App;
