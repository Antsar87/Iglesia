import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';
import Button from '../../utility/Button/Button';
import { ValidacionNombre } from '../Validaciones/ValidacionNombre';
import { ValidacionTel } from '../Validaciones/ValidacionTel';
import { ValidacionBox } from '../Validaciones/ValidacionBox';
import Popup from '../../utility/popup/Popup';
// import emailjs from 'emailjs-com';
import axios from 'axios';
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
  const [VoFNombre, setVoFNombre] = useState('');
  const [VoFApellido, setVoFApellido] = useState('');
  const [VoFTelefono, setVoFTelefono] = useState('');
  const [VoFPeticion, setVoFPeticion] = useState('');
  ///Validaciones States

  const form = useRef();

  useEffect(() => {
    if (start === true) {
      return;
    } else {
      //////// Validacion Nombres
      setVoFNombre(ValidacionNombre(nombre));

      //////// Validacion Apellido
      setVoFApellido(ValidacionNombre(apellido));

      ////// Validacion Telefono
      setVoFTelefono(ValidacionTel(telefonoContacto));

      /////Validacion Peticion
      setVoFPeticion(ValidacionNombre(peticion));
    }
  }, [nombre, apellido, telefonoContacto, peticion, start]);

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();

    ///Validacion Nombre
    setVoFNombre(ValidacionNombre(nombre));

    ////Validacion Apellido
    setVoFApellido(ValidacionNombre(apellido));

    ///Validacion Telefono
    setVoFTelefono(ValidacionTel(telefonoContacto));

    ////Validacion Box
    setVoFPeticion(ValidacionBox(peticion));

    setStart(false);
    ///Validacion De todos
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      telefonoContacto === '' ||
      peticion === '' ||
      !telefonoContacto.match('[0-9]{4}[ -][0-9]{4}') ||
      !nombre.match(/^[a-zA-Z]+$/) ||
      !apellido.match(/^[a-zA-Z]+$/)
    ) {
      return;
    }
    setStart(true);
    setpopup(true);

    // emailjs
    //   .sendForm(
    //     'service_qtagz2l',
    //     'template_xgogu37',
    //     e.target,
    //     'user_mu1Ke4tCNrIblNSCDFKhw'
    //   )
    //   .then(
    //     (result) => {
    //       settextpopup("Fue Enviado Exitosamente")
    //     },
    //     (error) => {
    //       settextpopup("Algo Salio Mal Intente de nuevo o mas Tarde")

    //     }
    //   );

    axios
      .post(`https://node-express-mon.herokuapp.com/api/peticionOracion`, {
        nombre,
        apellido,
        telefonoContacto,
        peticion,
      })
      .then((res) => {
        console.log(res);
        settextpopup(res.data)
      });

    setinfo({ nombre: '', apellido: '', telefonoContacto: '', peticion: '' });
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
              validation={VoFNombre}
              value={nombre}
            />
            <Input
              placeholder="Apellido"
              type="text"
              name="apellido"
              Change={save}
              validation={VoFApellido}
              value={apellido}
            />
            <Input
              placeholder="Teléfono de contacto (XXXX-XXXX)"
              type="tel"
              name="telefonoContacto"
              Change={save}
              validation={VoFTelefono}
              value={telefonoContacto}
            />
            <Input
              tipo="textarea"
              name="peticion"
              placeholder="Petición:"
              Change={save}
              validation={VoFPeticion}
              value={peticion}
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
        <h3>{textpopup}</h3>
      </Popup>
    </>
  );
};

export default FormOracion;
