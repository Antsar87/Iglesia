export const ValidacionFecha = (props) => {
  console.log(props);
  if (props === '') {
    return { VoF: true, error: 'Es obligatorio llenarlo' };
  }

  return { VoF: false, error: '' };
};
