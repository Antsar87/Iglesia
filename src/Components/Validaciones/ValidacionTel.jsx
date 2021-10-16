export const ValidacionTel = (props) => {
  if (props.trim() === '') {
    return { VoF: true, error: 'Es obligatorio llenarlo' };
  } else if (!props.match('[0-9]{4}[ -][0-9]{4}') || props.length > 9) {
    return { VoF: true, error: 'El Patron debe ser: XXXX-XXXX' };
  } else {
    return { VoF: false, error: '' };
  }
};
