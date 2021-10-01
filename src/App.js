import Home from './Pages/Home.jsx';

import { Switch, Route } from 'react-router-dom';
import Nosotros from './Pages/Nosotros.jsx';
import NavIcon from './Components/Nav-Icon/Nav-Icon.jsx';
import Menu from './Components/Menu/Menu.jsx';
import styled from 'styled-components';
import Popup from './Components/Home/popup/Popup.jsx';
import { useState } from 'react';
import Footer from './Components/Footer/Footer.jsx';

const Container = styled.div`
  overflow: hidden;
  max-width: 1200px;
  margin: 10px auto 0 auto;
`;
function App() {
  const [TF, setTF] = useState(false);

  const save = (conseguir) => {
    setTF(conseguir);
    console.log(conseguir);
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
      </Switch>

      {/* Footer */}
      <Footer ejecutar={save} />
      {/* Footer */}
    </>
  );
}

export default App;
