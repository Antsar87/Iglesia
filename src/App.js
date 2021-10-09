import Home from './Pages/Home.jsx';

import { Switch, Route } from 'react-router-dom';
import Nosotros from './Pages/Nosotros.jsx';
import NavIcon from './Components/Nav-Icon/Nav-Icon.jsx';
import Menu from './Components/Menu/Menu.jsx';
import styled from 'styled-components';
import Popup from './utility/popup/Popup.jsx';
import { useState } from 'react';
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
      {mapa === true ? (
        <>
          <Popup saving={savemapa}>
            <Map />
          </Popup>
        </>
      ) : null}

      {coffe === true ? (
        <>
          <Popup saving={savecoffe}>
            <Flex>
              <Buttonv2
                href="https://www.buymeacoffee.com/Antsar87"
                target="_blank"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                ☕️ Buy me a coffee
              </Buttonv2>
            </Flex>
          </Popup>
        </>
      ) : null}

      <Container>
        {/* Nav */}
        <NavIcon />
        {/* Nav */}

        {/* Menu */}
        <Menu saving={savecoffe} />
        {/* Menu */}
      </Container>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quienesSomos" component={Nosotros} />
        <Route exact path="/soynuevo" component={SoyNuevo} />
        <Route exact path="/peticiondeoracion" component={PeticionDeOracion} />
        <Route
          exact
          path="/gruposdecrecimiento"
          component={GruposDeCrecimiento}
        />
        <Route exact path="/presentacion" component={Presentacion} />
      </Switch>

      {/* Footer */}
      <Footer ejecutar={savemapa} saving={savecoffe} />
      {/* Footer */}
    </>
  );
}

export default App;
