import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
// import emailjs from 'emailjs-com';
import axios from 'axios';
//////
import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';
import Button from '../../utility/Button/Button';
import { ValidacionNombre } from '../Validaciones/ValidacionNombre';
import { ValidacionTel } from '../Validaciones/ValidacionTel';
import { ValidacionesOpciones } from '../Validaciones/ValidacionOpciones';
import Popup from '../../utility/popup/Popup';
import { device } from '../../Responsive/Responsive';
//////

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

const FormGrupo = () => {
  const [info, setinfo] = useState({
    nombre: '',
    apellido: '',
    tipoGrupo: '',
    telefonoContacto: '',
    horario: '',
    dia: '',
  });

  const form = useRef();

  //////// Validacion
  const [start, setStart] = useState(true);
  const [popup, setpopup] = useState();
  const [textpopup, settextpopup] = useState();

  ///Validaciones States
  const [VoFNombre, setVoFNombre] = useState({ VoF: '', error: '' });
  const [VoFApellido, setVoFApellido] = useState({ VoF: '', error: '' });
  const [VoFTelefono, setVoFTelefono] = useState({ VoF: '', error: '' });
  const [VoFGrupo, setVoFGrupo] = useState({ VoF: '', error: '' });
  const [VoFHorario, setVoFHorario] = useState({ VoF: '', error: '' });
  const [VoFDia, setVoFDia] = useState({ VoF: '', error: '' });
  ///Validaciones States
  const { nombre, apellido, telefonoContacto, horario, dia, tipoGrupo } = info;
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

      ///Validacion Grupo
      setVoFGrupo(ValidacionesOpciones(tipoGrupo));

      ///Validacion Horario
      setVoFHorario(ValidacionesOpciones(horario));

      ///Validacion Dia
      setVoFDia(ValidacionesOpciones(dia));
    }
  }, [nombre, apellido, telefonoContacto, horario, dia, tipoGrupo, start]);

  //////
  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
  };

  const send = async (e) => {
    e.preventDefault();

    setStart(false);

    ///Validacion De todos
    if (
      nombre === '' ||
      apellido === '' ||
      tipoGrupo === '' ||
      telefonoContacto === '' ||
      horario === '' ||
      dia === '' ||
      nombre.length < 3 ||
      nombre.length > 25 ||
      apellido.length < 3 ||
      apellido.apellido > 25 ||
      !nombre.match(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/) ||
      !apellido.match(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/) ||
      !telefonoContacto.match('[0-9]{4}[ -][0-9]{4}') ||
      telefonoContacto.length > 9 ||
      VoFNombre.VoF === true ||
      VoFApellido.VoF === true ||
      VoFDia.VoF === true ||
      VoFGrupo.VoF === true ||
      VoFHorario.VoF === true ||
      VoFTelefono.VoF === true
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
    //       settextpopup('Fue Enviado Exitosamente');
    //     },
    //     (error) => {
    //       settextpopup('Algo Salio Mal Intente Despues o mas Tarde');
    //     }
    //   );
    axios
      .post(`https://node-express-mon.herokuapp.com/api/gruposCrecimiento`, {
        nombre,
        apellido,
        tipoGrupo,
        telefonoContacto,
        horario,
        dia,
      })
      .then((res) => {
        console.log(res);
        settextpopup(res.data);
      });
  };
  //////// Validacion

  return (
    <>
      <FormHeader color="yellow">Grupos de Crecimiento</FormHeader>
      <Container>
        <Flex>
          <Form onSubmit={send} ref={form}>
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
              tipo="option"
              Default="Tipo de Grupo"
              name="tipoGrupo"
              valores={[
                { opciones: 'Matrimonios', id: '1' },
                { opciones: 'Adultos', id: '2' },
                { opciones: 'Jóvenes', id: '3' },
                { opciones: 'Pre-juveniles', id: '4' },
                { opciones: 'Niños', id: '5' },
              ]}
              Change={save}
              validation={VoFGrupo.VoF}
              error={VoFGrupo.error}
            />
            <Input
              placeholder="Teléfono de contacto (XXXX-XXXX)"
              type="tel"
              name="telefonoContacto"
              Change={save}
              pattern="[0-9]{4}[ -][0-9]{4}"
              validation={VoFTelefono.VoF}
              error={VoFTelefono.error}
              value={telefonoContacto}
            />
            <Input
              tipo="option"
              Default="Horario"
              name="horario"
              valores={[
                { opciones: 'Mañana', id: '1' },
                { opciones: 'Tarde', id: '2' },
                { opciones: 'Noche', id: '3' },
              ]}
              Change={save}
              validation={VoFHorario.VoF}
              error={VoFHorario.error}
            />
            <Input
              tipo="option"
              Default="Día"
              name="dia"
              valores={[
                { opciones: 'Lunes', id: '1' },
                { opciones: 'Martes', id: '2' },
                { opciones: 'Miercoles', id: '3' },
                { opciones: 'Jueves', id: '4' },
                { opciones: 'Viernes', id: '5' },
                { opciones: 'Sabado', id: '6' },
                { opciones: 'Domingo', id: '7' },
              ]}
              Change={save}
              validation={VoFDia.VoF}
              error={VoFDia.error}
            />
            <Button
              color="primary"
              center="center"
              width="full"
              type="submit"
              style={{ marginTop: '20px', background: '#C3C404' }}
            >
              Enviar
            </Button>
          </Form>

          <Footer>
            <FormFooter tipo="Main">
              Con gusto te contactaremos para darte informacion <br /> de un
              Grupo de crecimiento acerca de ti
            </FormFooter>
            <FormFooter>
              Tu palabra es una lampara que alumbra mi camino. <br /> Salmos
              119:105
            </FormFooter>
          </Footer>
        </Flex>
      </Container>
      <Popup
        show={popup}
        onHide={() => setpopup(false)}
        titulo="Espere un Momento"
        reload={true}
      >
        <h3>{textpopup}</h3>
      </Popup>
    </>
  );
};

export default FormGrupo;
