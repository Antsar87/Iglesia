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

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
    console.log(info);
  };
  return (
    <>
      <FormHeader>PRESENTACIÓN DE NIÑOS</FormHeader>
      <Container>
        <Flex>
          <Form>
            <Input placeholder="Fecha" type="text" name="fecha" Change={save} />
            <Input
              placeholder="Nombre completo del niño (a)"
              type="text"
              name="nombre"
              Change={save}
            />
            <Input
              placeholder="Edad del niño"
              type="number"
              name="edad"
              Change={save}
            />
            <Input
              placeholder="Nombre del padre"
              type="text"
              name="nombrepadre"
              Change={save}
            />
            <Input
              placeholder="Nombre de la Madre"
              type="text"
              name="nombremadre"
              Change={save}
            />
            <Input
              placeholder="No. teléfono"
              type="tel"
              name="tel"
              Change={save}
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
            />
            <Input
              placeholder="Nombre de Líder"
              type="text"
              name="nombrelider"
              Change={save}
            />
            <Input
              placeholder="Tiempo de asistir a la iglesia"
              type="tel"
              name="tiempoasistir"
              Change={save}
            />
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
    </>
  );
};

export default FormPresentacion;
