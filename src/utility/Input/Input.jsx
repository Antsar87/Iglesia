import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  font-weight: 700;
  width: 100%;
  height: 200px;
  margin-top: 10px;
  border: none;
  padding: 10px;
  transition: all 1s ease-in-out;
  color: ${(props) =>
    props.validation === true
      ? 'white'
      : props.validation === false
      ? 'white'
      : '#b1aeae'};

  border: 3px solid
    ${(props) =>
      props.validation === true
        ? '#e64c4c'
        : props.validation === false
        ? '#7db846be'
        : 'transparent'};

  background: ${(props) =>
    props.validation === true
      ? '#fa5454e0'
      : props.validation === false
      ? '#7cb448bd'
      : 'white'};
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) =>
      props.validation === true
        ? 'white'
        : props.validation === false
        ? 'white'
        : '#b1aeae'};
  }
`;
const Inputbox = styled.input`
  font-weight: 700;
  transition: all 1s ease-in-out;
  display: block;
  width: 100%;
  margin-top: 10px;
  border: none;
  padding: 10px;
  color: ${(props) =>
    props.validation === true
      ? 'white'
      : props.validation === false
      ? 'white'
      : '#b1aeae'};

  border: 3px solid
    ${(props) =>
      props.validation === true
        ? '#e64c4c'
        : props.validation === false
        ? '#7db846be'
        : 'transparent'};

  background: ${(props) =>
    props.validation === true
      ? '#fa5454e0'
      : props.validation === false
      ? '#7cb448bd'
      : 'white'};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) =>
      props.validation === true
        ? 'white'
        : props.validation === false
        ? 'white'
        : '#b1aeae'};
  }
  
`;

const Select = styled.select`
  font-weight: 700;
  display: block;
  width: 100%;
  margin-top: 10px;
  border: 1px solid transparent;
  transition: all 1s ease-in-out;
  padding: 10px;
  color: ${(props) =>
    props.validation === true
      ? 'white'
      : props.validation === false
      ? 'white'
      : '#b1aeae'};

  border: 3px solid
    ${(props) =>
      props.validation === true
        ? '#e64c4c'
        : props.validation === false
        ? '#7db846be'
        : 'transparent'};

  background: ${(props) =>
    props.validation === true
      ? '#fa5454e0'
      : props.validation === false
      ? '#7cb448bd'
      : 'white'};
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
          validation={props.validation}
          {...props}
        />
      ) : ////////////! Textarea
      props.tipo === 'option' ? (
        <Select
          name={props.name}
          default
          onChange={(e) => props.Change(e.target)}
          defaultValue={'Default'}
          validation={props.validation}
          {...props}
        >
          {/* //////////*Opcion Por Default */}
          <option value={'Default'} disabled hidden>
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
        <>
          <Inputbox
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            onChange={(e) => props.Change(e.target)}
            validation={props.validation}
            {...props}
          />
        </> ///* Input Normal
      )}
    </>
  );
};

export default Input;
