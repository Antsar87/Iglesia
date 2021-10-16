export const ValidacionNombre = (props) => {
  ////Validacion NOmbre
  if (props.trim() === '') {
    return { VoF: true, error: 'Es obligatorio llenarlo' };
  } else if (!props.match(/^[a-zA-Z\s]+$/)) {
    return { VoF: true, error: 'Solo se admite Letras' };
  } else if (props.length < 3 || props.length > 20) {
    return {
      VoF: true,
      error: 'Minimo 3 caracteres y Maximo 20',
    };
  }

  return { VoF: false, error: '' };
};

export const ValidacionNombreCompleto = (props) => {
  if (!props.match(/^[A-Za-z\s]+$/)) {
    return true;
  }

  return false;
};
