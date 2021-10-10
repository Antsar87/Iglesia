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

const FormOracion = () => {
  const [info, setinfo] = useState({
    nombre: '',
    apellido: '',
    tel: '',
    peticion: '',
  });

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
    console.log(info);
  };
  return (
    <>
      <FormHeader color="blue">PETICIÓN DE ORACIÓN</FormHeader>
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
              placeholder="Teléfono de contacto"
              type="tel"
              name="tel"
              Change={save}
            />
            <Input
              tipo="textarea"
              name="peticion"
              placeholder="Petición:"
              Change={save}
            />
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
    </>
  );
};

export default FormOracion;
