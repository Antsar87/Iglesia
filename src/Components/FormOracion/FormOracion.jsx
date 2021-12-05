import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';
import Button from '../../utility/Button/Button';
import { ValidacionNombre } from '../Validaciones/ValidacionNombre';
import { ValidacionTel } from '../Validaciones/ValidacionTel';
import Popup from '../../utility/popup/Popup';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { device } from '../../Responsive/Responsive';
import { ValidacionBox } from '../Validaciones/ValidacionBox';

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

    &:first-child {
      letter-spacing: 1px !important;

      @media ${device.tablet} {
        letter-spacing: 4px !important;
      }
    }

    &:last-child {
      letter-spacing: 1px;

      @media ${device.tablet} {
        letter-spacing: 3px !important;
      }
    }
  }
`;

const FormOracion = () => {
  const [info, setinfo] = useState({
    nombre: '',
    apellido: '',
    telefonoContacto: '',
    peticion: '',
  });

  const { nombre, apellido, telefonoContacto, peticion } = info;

  //////// Validacion
  const [start, setStart] = useState(true);
  const [popup, setpopup] = useState();
  const [textpopup, settextpopup] = useState();
  ///Validaciones States
  const [VoFNombre, setVoFNombre] = useState({ VoF: '', error: '' });
  const [VoFApellido, setVoFApellido] = useState({ VoF: '', error: '' });
  const [VoFTelefono, setVoFTelefono] = useState({ VoF: '', error: '' });
  const [VoFPeticion, setVoFPeticion] = useState({ VoF: '', error: '' });
  ///Validaciones States

  const form = useRef();

  useEffect(() => {
    if (start === true) {
      return;
    } else {
      //////// Validacion Nombres
      setVoFNombre(ValidacionNombre(nombre, 3, 25));

      //////// Validacion Apellido
      setVoFApellido(ValidacionNombre(apellido, 3, 25));

      ////// Validacion Telefono
      setVoFTelefono(ValidacionTel(telefonoContacto));

      /////Validacion Peticion
      setVoFPeticion(ValidacionBox(peticion));
    }
  }, [nombre, apellido, telefonoContacto, peticion, start]);

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value.toUpperCase() });
  };

  const send = async (e) => {
    e.preventDefault();

    setStart(false);
    ///Validacion De todos
    if (
      nombre === '' ||
      apellido === '' ||
      telefonoContacto === '' ||
      peticion === '' ||
      VoFNombre.VoF === true ||
      VoFApellido.VoF === true ||
      VoFTelefono.VoF === true ||
      VoFPeticion.VoF === true ||
      !nombre.match(/^[a-zA-ZáéíóúAÉÍÓÚÑñ\s]+$/) ||
      !apellido.match(/^[a-zA-ZáéíóúAÉÍÓÚÑñ\s]+$/) ||
      !telefonoContacto.match('[0-9]{4}[0-9]{4}') ||
      telefonoContacto.length > 8 ||
      nombre.length < 3 ||
      nombre.length > 25 ||
      apellido.length < 3 ||
      apellido.length > 25
    ) {
      return;
    }
    setStart(true);
    setpopup(true);

    emailjs
    .sendForm(
      'service_f8qnxvp',
      'template_wqiik7l',
      e.target,
      'user_jflobi4DYtpXXfMyGSlL3'
    )
    .then(
      () => {
        settextpopup('Fue Enviado Exitosamente');
      },
      () => {
        settextpopup('Algo Salio Mal Intente Despues o mas Tarde');
      }
    );

    axios
      .post(`https://iglesia-palabra-fiel.herokuapp.com/api/peticionOracion`, {
        nombre: nombre.toUpperCase(),
        apellido: apellido.toUpperCase(),
        telefonoContacto: telefonoContacto.toUpperCase(),
        peticion: peticion.toUpperCase(),
      })
      .then((res) => {
        console.log(res);
        settextpopup(res.data);
      });
  };
  //////// Validacion

  return (
    <>
      <FormHeader color="blue">PETICIÓN DE ORACIÓN</FormHeader>
      <Container>
        <Flex>
          <Form ref={form} onSubmit={send}>
            <Input
              placeholder="Nombre"
              type="text"
              name="nombre"
              Change={save}
              validation={VoFNombre.VoF}
              error={VoFNombre.error}
            />
            <Input
              placeholder="Apellido"
              type="text"
              name="apellido"
              Change={save}
              validation={VoFApellido.VoF}
              error={VoFApellido.error}
            />
            <Input
              placeholder="Teléfono de contacto (XXXXXXXX)"
              type="tel"
              name="telefonoContacto"
              Change={save}
              validation={VoFTelefono.VoF}
              error={VoFTelefono.error}
            />
            <Input
              tipo="textarea"
              name="peticion"
              placeholder="Petición:"
              Change={save}
              validation={VoFPeticion.VoF}
              error={VoFPeticion.error}
            />

            <Button
              color="primary"
              center="center"
              width="full"
              type="submit"
              style={{ marginTop: '20px', background: '#0C59B5' }}
            >
              Enviar
            </Button>
          </Form>

          <Footer>
            <FormFooter tipo="Main">!Estaremos orando por ti!</FormFooter>
            <FormFooter>
              No se preocupen por nada. Mas bien, oren y pidanle a <br /> Dios
              todo lo que necesiten, y sean agradecidos <br />
              Filipenses 4:6
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
        {textpopup && (
          <h3>
            Tu información ha sido enviada exitosamente, le daremos seguimiento
            a tu solicitud
          </h3>
        )}
      </Popup>
    </>
  );
};

export default FormOracion;
