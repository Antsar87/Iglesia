import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';
// import emailjs from 'emailjs-com';
import axios from 'axios';
import Button from '../../utility/Button/Button';
import { ValidacionNombre } from '../Validaciones/ValidacionNombre';
import { ValidacionTel } from '../Validaciones/ValidacionTel';
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

const FormNuevo = () => {
  const [info, setinfo] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    mensaje: '',
  });

  const { nombre, apellido, telefono, mensaje } = info;

  const form = useRef();
  const [textpopup, settextpopup] = useState();
  //////// Validacion
  const [start, setStart] = useState(true);

  const [popup, setpopup] = useState('');

  ///Validaciones States
  const [VoFNombre, setVoFNombre] = useState('');
  const [VoFApellido, setVoFApellido] = useState('');
  const [VoFTelefono, setVoFTelefono] = useState('');
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
      setVoFTelefono(ValidacionTel(telefono));
    }
  }, [nombre, apellido, telefono, start]);

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
    setVoFTelefono(ValidacionTel(telefono));

    setStart(false);

    ///Validacion De todos
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      telefono === '' ||
      !nombre.match(/^[a-zA-Z]+$/) ||
      !telefono.match('[0-9]{4}[ -][0-9]{4}') ||
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
    //       settextpopup('Fue Enviado Exitosamente');
    //     },
    //     (error) => {
    //       settextpopup('Algo Salio Mal intente despues o mas Tarde');
    //     }
    //   );

    axios
      .post(`https://node-express-mon.herokuapp.com/api/soyNuevo`, {
        nombre,
        apellido,
        telefono,
        mensaje,
      })
      .then((res) => {
        console.log(res);
        settextpopup(res.data)
      });

    setinfo({ nombre: '', apellido: '', tel: '', area: '' });
  };
  //////// Validacion

  return (
    <>
      <FormHeader color="green">soy nuevo</FormHeader>
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
              name="telefono"
              Change={save}
              validation={VoFTelefono}
              value={telefono}
            />
            <Input
              tipo="textarea"
              name="mensaje"
              placeholder="Mensaje/Pregunta:"
              Change={save}
              value={mensaje}
            />
            <Button
              color="primary"
              center="center"
              width="full"
              type="submit"
              style={{ marginTop: '20px', background: '#12AFAF' }}
            >
              Enviar
            </Button>
          </Form>

          <Footer>
            <FormFooter tipo="Main">
              !Te damos la bienvenida a la familia Palabra Fiel!
            </FormFooter>
            <FormFooter>
              Por lo tanto, si alguno esta en Cristo, es una nueva creacion.
              <br /> ¡Lo viejo ha pasado, ha llegado ya lo nuevo! 2 <br />{' '}
              Corintios 5:17
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

export default FormNuevo;
