export const ValidacionEdad = (props) => {
  if (props.trim() === '') {
    return { VoF: true, error: 'Es obligatorio llenarlo' };
  } else if (props < 1 || props > 17) {
    return { VoF: true, error: 'Edad Minima: 1, Maxima: 17' };
  }
  return { VoF: false, error: '' };
};
