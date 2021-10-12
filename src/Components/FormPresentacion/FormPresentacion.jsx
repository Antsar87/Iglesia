import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';
import Button from '../../utility/Button/Button';

import { ValidacionNombre } from '../Validaciones/ValidacionNombre';
import { ValidacionTel } from '../Validaciones/ValidacionTel';
import { ValidacionesOpciones } from '../Validaciones/ValidacionOpciones';
import Popup from '../../utility/popup/Popup';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  width: 40%;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 20px;
  width: 100%;

  & p:first-child {
    letter-spacing: 4px !important;
  }

  & p:last-child {
    letter-spacing: 3px;
  }
`;

const FormPresentacion = () => {
  const [info, setinfo] = useState({
    fecha: '',
    nombre: '',
    edad: '',
    nombrepadre: '',
    nombremadre: '',
    tel: '',
    servicio: '',
    nombrelider: '',
    tiempoasistir: '',
  });

  const {
    fecha,
    nombre,
    edad,
    nombrepadre,
    nombremadre,
    tel,
    servicio,
    nombrelider,
    tiempoasistir,
  } = info;

  //////// Validacion
  const [start, setStart] = useState(true);

  ///Validaciones States
  const [VoFFecha, setVoFFecha] = useState('');
  const [VoFNombre, setVoFnNombre] = useState('');
  const [VoFEdad, setVoFEdad] = useState('');
  const [VoFPadre, setVoFPadre] = useState('');
  const [VoFMadre, setVoFMadre] = useState('');
  const [VoFTel, setVoFTel] = useState('');
  const [VoFServicio, setVoFServicio] = useState('');
  const [VoFLider, setVoFLider] = useState('');
  const [VoFAsistir, setVoFAsistir] = useState('');
  const [popup, setpopup] = useState('');
  ///Validaciones States

  useEffect(() => {
    if (start === true) {
      return;
    } else {
      //////// Validacion Nombres
      setVoFnNombre(ValidacionNombre(nombre));

      ////// Validacion Telefono
      setVoFTel(ValidacionTel(tel));

      /////Validacion padre
      setVoFPadre(ValidacionNombre(nombrepadre));

      setVoFMadre(ValidacionNombre(nombremadre));
      ////Validacion Servicio
      setVoFServicio(ValidacionesOpciones(servicio));

      ///Validacion Edad
      setVoFEdad(ValidacionesOpciones(edad));

      ///Validacion Fecha
      setVoFFecha(ValidacionesOpciones(fecha));

      //Validacion Asistir
      setVoFAsistir(ValidacionNombre(tiempoasistir));

      //Validacion Lider
      setVoFLider(ValidacionNombre(nombrelider));
    }
  }, [
    fecha,
    nombre,
    edad,
    nombrepadre,
    nombremadre,
    tel,
    servicio,
    nombrelider,
    tiempoasistir,
    start,
  ]);

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
    console.log(info);
  };

  const send = async (e) => {
    e.preventDefault();

    //////// Validacion Nombres
    setVoFnNombre(ValidacionNombre(nombre));

    ////// Validacion Telefono
    setVoFTel(ValidacionTel(tel));

    /////Validacion Peticion
    setVoFPadre(ValidacionNombre(nombrepadre));

    ////Validacion Servicio
    setVoFServicio(ValidacionesOpciones(servicio));

    ///Validacion Edad
    setVoFEdad(ValidacionesOpciones(edad));

    ///Validacion Fecha
    setVoFFecha(ValidacionesOpciones(fecha));

    //Validacion Asistir
    setVoFAsistir(ValidacionNombre(tiempoasistir));

    //Validacion Lider
    setVoFLider(ValidacionNombre(nombrelider));

    setVoFMadre(ValidacionNombre(nombremadre));

    setStart(false);

    ///Validacion De todos
    if (
      nombre.trim() === '' ||
      edad.trim() === '' ||
      tel === '' ||
      fecha === '' ||
      nombrelider === '' ||
      nombrepadre === '' ||
      nombremadre === '' ||
      tiempoasistir === '' ||
      !nombre.match(/^[a-zA-Z]+$/)
    ) {
      return;
    }
    setStart(true);
    setpopup(true);

    setinfo({
      nombre: '',
      apellido: '',
      tel: '',
      nombrelider: '',
      nombremadre: '',
      nombrepadre: '',
      fecha: '',
      servicio: '',
      tiempoasistir: '',
      edad: '',
    });
  };
  return (
    <>
      <FormHeader>PRESENTACIÓN DE NIÑOS</FormHeader>
      <Container>
        <Flex>
          <Form onSubmit={send}>
            <Input
              placeholder="Fecha"
              type="date"
              name="fecha"
              Change={save}
              validation={VoFFecha}
              value={fecha}
            />
            <Input
              placeholder="Nombre completo del niño (a)"
              type="text"
              name="nombre"
              Change={save}
              validation={VoFNombre}
              value={nombre}
            />
            <Input
              placeholder="Edad del niño"
              type="number"
              name="edad"
              min="1"
              Change={save}
              validation={VoFEdad}
              value={edad}
            />
            <Input
              placeholder="Nombre del padre"
              type="text"
              name="nombrepadre"
              Change={save}
              validation={VoFPadre}
              value={nombrepadre}
            />
            <Input
              placeholder="Nombre de la Madre"
              type="text"
              name="nombremadre"
              Change={save}
              validation={VoFMadre}
              value={nombremadre}
            />
            <Input
              placeholder="No. teléfono"
              type="tel"
              name="tel"
              Change={save}
              validation={VoFTel}
              value={tel}
            />
            <Input
              Default="Servicio al que asiste dia domingo"
              valores={[
                { opciones: '8:00 A.M.', id: '1' },
                { opciones: '10:00 A.M.', id: '2' },
              ]}
              type="text"
              tipo="option"
              name="servicio"
              Change={save}
              validation={VoFServicio}
            />
            <Input
              placeholder="Nombre de Líder"
              type="text"
              name="nombrelider"
              Change={save}
              validation={VoFLider}
              value={nombrelider}
            />
            <Input
              placeholder="Tiempo de asistir a la iglesia"
              type="tel"
              name="tiempoasistir"
              Change={save}
              validation={VoFAsistir}
              value={tiempoasistir}
            />

            <Button
              color="primary"
              center="center"
              width="full"
              type="submit"
              style={{ marginTop: '20px', background: '#9873BC' }}
            >
              Enviar
            </Button>
          </Form>

          <Footer>
            <FormFooter>
              Enseña al niño el camino en que debe andar, <br />
              y aun cuando sea viejo no se apartara de el. <br />
              Proverbios 22:6
            </FormFooter>
          </Footer>
        </Flex>
      </Container>
      <Popup
        show={popup}
        onHide={() => setpopup(false)}
        titulo="Envio Completado"
      >
        <h3>Enviado</h3>
      </Popup>
    </>
  );
};

export default FormPresentacion;
