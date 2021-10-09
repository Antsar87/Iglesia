import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  font-weight: 700;
  width: 100%;
  height: 200px;
  margin-top: 10px;
  border: none;
  background: white;
  padding: 10px;
  color: #b1aeae;
  &:focus {
    outline: none;
  }
`;
const Inputbox = styled.input`
  font-weight: 700;
  display: block;
  background: white;
  width: 100%;
  margin-top: 10px;
  border: none;
  padding: 10px;
  color: #b1aeae;

  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  font-weight: 700;
  display: block;
  background: white;
  width: 100%;
  margin-top: 10px;
  border: none;
  padding: 10px;
  color: #8f8e8e;
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  return (
    <>
      {props.tipo === 'textarea' ? (
        ////////////! Textarea

        <Textarea
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onChange={(e) => props.Change(e.target)}
        />
      ) : ////////////! Textarea
      props.tipo === 'option' ? (
        <Select
          name={props.name}
          default
          onChange={(e) => props.Change(e.target)}
          defaultValue={'Default'}
        >
          {/* //////////*Opcion Por Default */}
          <option value={"Default"} disabled hidden>
            {props.Default}
          </option>
          {/* //////////*Opcion Por Default */}

          {/* ////////! Opciones */}
          {props.valores.map((valor) => (
            <option value={valor.opciones} key={valor.id}>
              {valor.opciones}
            </option>
          ))}
          {/* ////////! Opciones */}
        </Select>
      ) : (
        ///* Input Normal
        <Inputbox
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onChange={(e) => props.Change(e.target)}
        />
        ///* Input Normal
      )}
    </>
  );
};

export default Input;
