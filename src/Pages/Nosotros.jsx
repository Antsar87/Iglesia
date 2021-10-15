import React from 'react';
import NosotrosConectate from '../Components/Nosotros/Conectate/Conectate';
import QuienesSomos from '../Components/Nosotros/QuienesSomos/QuienesSomos';
import Sumate from '../Components/Nosotros/Sumate/Sumate';
import Valores from '../Components/Nosotros/Valores/Valores';
import Video from '../Components/Nosotros/Video/Video';

const Nosotros = () => {
  return (
    <>
      <QuienesSomos />
      <Video />
      <Valores />
      <NosotrosConectate />
      <Sumate />
    </>
  );
};

export default Nosotros;
