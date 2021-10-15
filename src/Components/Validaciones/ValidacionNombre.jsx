export const ValidacionNombre = (props) => {
  ////Validacion NOmbre
  if (props.trim() === '') {
    return true;
  }

  if (!props.match(/^[a-zA-Z]+$/)) {
    return true;
  }

  return false;
};

export const ValidacionNombreCompleto = (props) => {
  if (!props.match(/^[A-Za-z\s]+$/)) {
    return true;
  }

  return false;
};
