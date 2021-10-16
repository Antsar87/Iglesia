import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';
import Button from '../../utility/Button/Button';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import {
  ValidacionNombre,
  ValidacionNombreCompleto,
} from '../Validaciones/ValidacionNombre';
import { ValidacionTel } from '../Validaciones/ValidacionTel';
import { ValidacionesOpciones } from '../Validaciones/ValidacionOpciones';
import Popup from '../../utility/popup/Popup';
import { device } from '../../Responsive/Responsive';

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
  width: 100%;

  @media ${device.tablet} {
    width: 40%;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 20px;
  width: 100%;

  & p {
    font-size: 13px;

    @media ${device.tablet} {
      font-size: 16px;
    }

    &:last-child {
      letter-spacing: 1px;

      @media ${device.tablet} {
        letter-spacing: 3px !important;
      }
    }
  }
`;

const FormPresentacion = () => {
  const [info, setinfo] = useState({
    fecha: '',
    nombreNino: '',
    edadNino: '',
    nombrePadre: '',
    nombreMadre: '',
    telefono: '',
    servicioAsistir: '',
    nombreLider: '',
    tiempoAsistir: '',
  });

  const form = useRef();

  const {
    fecha,
    nombreNino,
    edadNino,
    nombrePadre,
    nombreMadre,
    telefono,
    servicioAsistir,
    nombreLider,
    tiempoAsistir,
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
  const [textpopup, settextpopup] = useState('');
  ///Validaciones States

  useEffect(() => {
    if (start === true) {
      return;
    } else {
      //////// Validacion Nombres
      setVoFnNombre(ValidacionNombreCompleto(nombreNino));

      ////// Validacion Telefono
      setVoFTel(ValidacionTel(telefono));

      /////Validacion padre
      setVoFPadre(ValidacionNombre(nombrePadre));

      setVoFMadre(ValidacionNombre(nombreMadre));
      ////Validacion Servicio
      setVoFServicio(ValidacionesOpciones(servicioAsistir));

      ///Validacion Edad
      setVoFEdad(ValidacionesOpciones(edadNino));

      ///Validacion Fecha
      setVoFFecha(ValidacionesOpciones(fecha));

      //Validacion Asistir
      setVoFAsistir(ValidacionNombre(tiempoAsistir));

      //Validacion Lider
      setVoFLider(ValidacionNombre(nombreLider));
    }
  }, [
    fecha,
    nombreNino,
    edadNino,
    nombrePadre,
    nombreMadre,
    telefono,
    servicioAsistir,
    nombreLider,
    tiempoAsistir,
    start,
  ]);

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();

    //////// Validacion Nombres
    setVoFnNombre(ValidacionNombreCompleto(nombreNino));

    ////// Validacion Telefono
    setVoFTel(ValidacionTel(telefono));

    /////Validacion Peticion
    setVoFPadre(ValidacionNombre(nombrePadre));

    ////Validacion Servicio
    setVoFServicio(ValidacionesOpciones(servicioAsistir));

    ///Validacion Edad
    setVoFEdad(ValidacionesOpciones(edadNino));

    ///Validacion Fecha
    setVoFFecha(ValidacionesOpciones(fecha));

    //Validacion Asistir
    setVoFAsistir(ValidacionNombre(tiempoAsistir));

    //Validacion Lider
    setVoFLider(ValidacionNombre(nombreLider));

    setVoFMadre(ValidacionNombre(nombreMadre));

    setStart(false);

    ///Validacion De todos
    if (
      edadNino.trim() === '' ||
      telefono === '' ||
      fecha === '' ||
      nombreLider === '' ||
      nombrePadre === '' ||
      nombreMadre === '' ||
      tiempoAsistir === '' ||
      !nombreNino.match(/^[a-zA-Z\s]+$/) ||
      !telefono.match('[0-9]{4}[ -][0-9]{4}')
    ) {
      return;
    }

    setStart(true);
    setpopup(true);

    // emailjs
    //   .sendForm(
    //     'service_qtagz2l',
    //     'template_vil954u',
    //     e.target,
    //     'user_mu1Ke4tCNrIblNSCDFKhw'
    //   )
    //   .then(
    //     (result) => {
    //       settextpopup('Fue Enviado Excitosamente');
    //     },
    //     (error) => {
    //       settextpopup('Salio Algo Mal Intente de nuevo o mas Tarde');
    //     }
    //   );

    axios
      .post(`https://node-express-mon.herokuapp.com/api/presentacionNino`, {
        fecha,
        nombreNino,
        edadNino,
        nombrePadre,
        nombreMadre,
        telefono,
        servicioAsistir,
        nombreLider,
        tiempoAsistir,
      })
      .then((res) => {
        console.log(res);
        settextpopup(res.data);
      });

    setinfo({
      nombreNino: '',
      telefono: '',
      nombreLider: '',
      nombreMadre: '',
      nombrePadre: '',
      fecha: '',
      servicioAsistir: '',
      tiempoAsistir: '',
      edadNino: '',
    });
  };
  return (
    <>
      <FormHeader>PRESENTACIÓN DE NIÑOS</FormHeader>
      <Container>
        <Flex>
          <Form onSubmit={send} ref={form}>
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
              name="nombreNino"
              Change={save}
              validation={VoFNombre}
              value={nombreNino}
            />
            <Input
              placeholder="Edad del niño"
              type="number"
              name="edadNino"
              min="1"
              Change={save}
              validation={VoFEdad}
              value={edadNino}
            />
            <Input
              placeholder="Nombre del padre"
              type="text"
              name="nombrePadre"
              Change={save}
              validation={VoFPadre}
              value={nombrePadre}
            />
            <Input
              placeholder="Nombre de la Madre"
              type="text"
              name="nombreMadre"
              Change={save}
              validation={VoFMadre}
              value={nombreMadre}
            />
            <Input
              placeholder="No. teléfono (XXXX-XXXX)"
              type="tel"
              name="telefono"
              Change={save}
              validation={VoFTel}
              value={telefono}
            />
            <Input
              Default="Servicio al que asiste dia domingo"
              valores={[
                { opciones: '8:00 A.M.', id: '1' },
                { opciones: '10:00 A.M.', id: '2' },
              ]}
              type="text"
              tipo="option"
              name="servicioAsistir"
              Change={save}
              validation={VoFServicio}
            />
            <Input
              placeholder="Nombre de Líder"
              type="text"
              name="nombreLider"
              Change={save}
              validation={VoFLider}
              value={nombreLider}
            />
            <Input
              placeholder="Tiempo de asistir a la iglesia"
              type="text"
              name="tiempoAsistir"
              Change={save}
              validation={VoFAsistir}
              value={tiempoAsistir}
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
        titulo="Espere un momento..."
        reload={true}
      >
        <h3>{textpopup}</h3>
      </Popup>
    </>
  );
};

export default FormPresentacion;
