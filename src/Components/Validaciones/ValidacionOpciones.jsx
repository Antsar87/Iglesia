export const ValidacionesOpciones = (props) => {
  if (props === '') {
    return { VoF: true, error: 'Es Obligatorio escoger una opción' };
  } else {
    return { VoF: false, error: '' };
  }
};
