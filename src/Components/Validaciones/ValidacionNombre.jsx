export const ValidacionNombre = (props, min, max) => {
  ////Validacion NOmbre
  if (props.trim() === '') {
    return { VoF: true, error: 'Es obligatorio llenarlo' };
  } else if (!props.match(/^[a-zA-ZáéíóúAÉÍÓÚÑñ\s]+$/)) {
    return { VoF: true, error: 'Solo se admite Letras' };
  } else if (props.length < min || props.length > max) {
    return {
      VoF: true,
      error: `Minimo ${min} caracteres y Maximo ${max}`,
    };
  }

  return { VoF: false, error: '' };
};
