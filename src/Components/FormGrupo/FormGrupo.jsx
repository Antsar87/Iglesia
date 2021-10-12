import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//////
import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';
import Button from '../../utility/Button/Button';
import { ValidacionNombre } from '../Validaciones/ValidacionNombre';
import { ValidacionTel } from '../Validaciones/ValidacionTel';
import { ValidacionesOpciones } from '../Validaciones/ValidacionOpciones';
import Popup from '../../utility/popup/Popup';
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

const FormGrupo = () => {
  const [info, setinfo] = useState({
    nombre: '',
    apellido: '',
    grupo: '',
    tel: '',
    horario: '',
    dia: '',
  });

  //////// Validacion
  const [start, setStart] = useState(true);
  const [popup, setpopup] = useState();

  ///Validaciones States
  const [VoFNombre, setVoFNombre] = useState('');
  const [VoFApellido, setVoFApellido] = useState('');
  const [VoFTelefono, setVoFTelefono] = useState('');
  const [VoFGrupo, setVoFGrupo] = useState('');
  const [VoFHorario, setVoFHorario] = useState('');
  const [VoFDia, setVoFDia] = useState('');
  ///Validaciones States
  const { nombre, apellido, tel, horario, dia, grupo } = info;
  useEffect(() => {
    const correr = () => {
      if (start === true) {
        return;
      } else {
        //////// Validacion Nombres
        setVoFNombre(ValidacionNombre(nombre));

        //////// Validacion Apellido
        setVoFApellido(ValidacionNombre(apellido));

        ////// Validacion Telefono
        setVoFTelefono(ValidacionTel(tel));

        ///Validacion Grupo
        setVoFGrupo(ValidacionesOpciones(grupo));

        ///Validacion Horario
        setVoFHorario(ValidacionesOpciones(horario));

        ///Validacion Dia
        setVoFDia(ValidacionesOpciones(dia));
      }
    };

    correr();
  }, [nombre, apellido, tel, horario, dia, grupo, start]);

  //////
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
    setVoFTelefono(ValidacionTel(tel));

    ///Validacion Grupo
    setVoFGrupo(ValidacionesOpciones(grupo));

    ///Validacion Horario
    setVoFHorario(ValidacionesOpciones(horario));

    ///Validacion Dia
    setVoFDia(ValidacionesOpciones(dia));

    setStart(false);

    ///Validacion De todos
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      grupo === '' ||
      tel === '' ||
      horario === '' ||
      dia === '' ||
      !nombre.match(/^[a-zA-Z]+$/) ||
      !apellido.match(/^[a-zA-Z]+$/)
    ) {
      return;
    }
    setStart(true);

    setinfo({ nombre: '', apellido: '', tel: '' });
    setpopup(true);
  };
  //////// Validacion

  return (
    <>
      <FormHeader color="yellow">Grupos de Crecimiento</FormHeader>
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
              tipo="option"
              Default="Tipo de Grupo"
              name="grupo"
              valores={[
                { opciones: 'Matrimonios', id: '1' },
                { opciones: 'Adultos', id: '2' },
                { opciones: 'Jóvenes', id: '3' },
                { opciones: 'Pre-juveniles', id: '4' },
                { opciones: 'Niños', id: '5' },
              ]}
              Change={save}
              validation={VoFGrupo}
            />
            <Input
              placeholder="Teléfono de contacto"
              type="tel"
              name="tel"
              Change={save}
              pattern="[0-9]{4}[ -][0-9]{4}"
              title="A valid phone"
              validation={VoFTelefono}
              value={tel}
              // requireds
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
              validation={VoFHorario}
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
              validation={VoFDia}
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
        titulo="Envio Completado"
      >
        <h3>Enviado</h3>
      </Popup>
    </>
  );
};

export default FormGrupo;
