import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';
import Button from '../../utility/Button/Button';
import { ValidacionNombre } from '../Validaciones/ValidacionNombre';
import { ValidacionTel } from '../Validaciones/ValidacionTel';
import { ValidacionBox } from '../Validaciones/ValidacionBox';
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

const FormOracion = () => {
  const [info, setinfo] = useState({
    nombre: '',
    apellido: '',
    tel: '',
    peticion: '',
  });

  const { nombre, apellido, tel, peticion } = info;

  //////// Validacion
  const [start, setStart] = useState(true);
 const [popup, setpopup] = useState()
  ///Validaciones States
  const [VoFNombre, setVoFNombre] = useState('');
  const [VoFApellido, setVoFApellido] = useState('');
  const [VoFTelefono, setVoFTelefono] = useState('');
  const [VoFPeticion, setVoFPeticion] = useState('');
  ///Validaciones States

  useEffect(() => {
    if (start === true) {
      return;
    } else {
      //////// Validacion Nombres
      setVoFNombre(ValidacionNombre(nombre));

      //////// Validacion Apellido
      setVoFApellido(ValidacionNombre(apellido));

      ////// Validacion Telefono
      setVoFTelefono(ValidacionTel(tel));

      /////Validacion Peticion
      setVoFPeticion(ValidacionNombre(peticion));
    }
  }, [info]);

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
    console.log(info);
  };

  const send = async (e) => {
    e.preventDefault();

    ///Validacion Nombre
    setVoFNombre(ValidacionNombre(nombre));

    ////Validacion Apellido
    setVoFApellido(ValidacionNombre(apellido));

    ///Validacion Telefono
    setVoFTelefono(ValidacionTel(tel));

    ////Validacion Box
    setVoFPeticion(ValidacionBox(peticion));

    setStart(false);

    ///Validacion De todos
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      tel === '' ||
      peticion === '' ||
      !nombre.match(/^[a-zA-Z]+$/) ||
      !apellido.match(/^[a-zA-Z]+$/)
    ) {
      return;
    }
    setStart(true);
    setpopup(true)

    setinfo({ nombre: '', apellido: '', tel: '', peticion: '' });
  };
  //////// Validacion

  return (
    <>
      <FormHeader color="blue">PETICIÓN DE ORACIÓN</FormHeader>
      <Container>
        <Flex>
          <Form onSubmit={send}>
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
              placeholder="Teléfono de contacto"
              type="tel"
              name="tel"
              Change={save}
              validation={VoFTelefono}
              value={tel}
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
        titulo="Envio Completado"
      >
        <h3>Enviado</h3>
      </Popup>
    </>
  );
};

export default FormOracion;
