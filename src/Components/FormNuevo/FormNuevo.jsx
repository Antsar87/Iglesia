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
    letter-spacing: 4px!important;
  }

  & p:last-child {
    letter-spacing: 3px;
  }
`;

const FormNuevo = () => {
  const [info, setinfo] = useState({
    nombre: '',
    apellido: '',
    tel: '',
    area: '',
  });

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
    console.log(info);
  };
  return (
    <>
      <FormHeader color="green">soy nuevo</FormHeader>
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
              placeholder="Telefono de contacto"
              type="tel"
              name="tel"
              Change={save}
            />
            <Input
              tipo="textarea"
              name="area"
              placeholder="Mensaje/Pregunta:"
              Change={save}
            />
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
    </>
  );
};

export default FormNuevo;
