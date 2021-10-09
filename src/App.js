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

const Container = styled.div`
  overflow: hidden;
  max-width: 1200px;
  margin: 10px auto 0 auto;
`;
function App() {
  const [TF, setTF] = useState(false);

  const save = (conseguir) => {
    setTF(conseguir);
  };
  return (
    <>
      {TF === true ? (
        <>
          <Popup saving={save} />
        </>
      ) : null}

      <Container>
        {/* Nav */}
        <NavIcon />
        {/* Nav */}

        {/* Menu */}
        <Menu />
        {/* Menu */}
      </Container>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quienesSomos" component={Nosotros} />
        <Route exact path="/soynuevo" component={SoyNuevo} />
        <Route exact path="/peticiondeoracion" component={PeticionDeOracion} />
        <Route exact path="/gruposdecrecimiento" component={GruposDeCrecimiento} />
        <Route exact path="/presentacion" component={Presentacion} />

      </Switch>

      {/* Footer */}
      <Footer ejecutar={save} />
      {/* Footer */}
    </>
  );
}

export default App;
