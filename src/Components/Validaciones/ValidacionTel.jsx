export const ValidacionTel = (props) => {
  if (props.trim() === '') {
    return { VoF: true, error: 'Es obligatorio llenarlo' };
  } else if (!props.match('[0-9]{4}[0-9]{4}') || props.length > 8) {
    return { VoF: true, error: 'El Patron debe ser: XXXXXXXX' };
  } else {
    return { VoF: false, error: '' };
  }
};
