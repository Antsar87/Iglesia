export const ValidacionBox = (props) => {
  if (props.trim() === '') {
    return { VoF: true, error: 'Es obligatorio llenarlo' };
  } else if (props.length < 3 || props.length > 80) {
    return { VoF: true, error: 'Minimo 3 caracteres y Maximo 80' };
  }

  return { VoF: false, error: '' };
};
