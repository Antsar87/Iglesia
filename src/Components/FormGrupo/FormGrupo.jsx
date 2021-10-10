import React, { useState } from 'react';
import styled from 'styled-components';
import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';

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
    tipo: '',
    tel: '',
    horario: '',
    dia: '',
  });

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
  };
  return (
    <>
      <FormHeader color="yellow">Grupos de Crecimiento</FormHeader>
      <Container>
        <Flex>
          <Form>
            <Input
              placeholder="Nombre"
              type="text"
              name="nombre"
              Change={save}
            />
            <Input
              placeholder="Apellido"
              type="text"
              name="apellido"
              Change={save}
            />
            <Input
              tipo="option"
              Default="Tipo de Grupo"
              name="tipo"
              valores={[
                { opciones: 'Matrimonios', id: '1' },
                { opciones: 'Adultos', id: '2' },
                { opciones: 'Jóvenes', id: '3' },
                { opciones: 'Pre-juveniles', id: '4' },
                { opciones: 'Niños', id: '4' },
              ]}
              Change={save}
            />
            <Input
              placeholder="Teléfono de contacto"
              type="tel"
              name="tel"
              Change={save}
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
            />
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
    </>
  );
};

export default FormGrupo;
