import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  & a {
    text-decoration: none;
    color: #7e7d7d;
    transition: all 1s ease;
    padding: 5px;
    border: 1px solid transparent;

    &:hover {
      color: black;
      transform: scale(1.1);
    }
  }
`;

const Menu = () => {
  return (
    <Container>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/">Quienes Somos</NavLink>
      <NavLink to="/">En vivo</NavLink>
      <NavLink to="/">Nuestra Agenda</NavLink>
      <NavLink to="/">Grupos de Crecimiento</NavLink>
      <NavLink to="/">Soy Nuevo</NavLink>
      <NavLink to="/">Ministerios</NavLink>
      <NavLink to="/">Dar</NavLink>
    </Container>
  );
};

export default Menu;
