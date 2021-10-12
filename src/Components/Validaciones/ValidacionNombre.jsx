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
