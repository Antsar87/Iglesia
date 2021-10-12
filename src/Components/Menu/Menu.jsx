import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useHistory } from 'react-router';

const Container = styled.div`
  margin-top: 20px;
  height: 100px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.color === 'white' &&
    css`
      a,
      button {
        color: white !important;
      }
    `}

  & a, button {
    display: inline;
    text-decoration: none;
    color: #3c3c3b;
    transition: all 1s ease;
    padding: 5px;
    border: 1px solid transparent;

    &:hover {
      color: black;
      transform: scale(1.1);
    }
  }
`;

const Button = styled.button`
  border: none;
  background: none;
`;

const Menu = (props) => {
  const { push } = useHistory();
  return (
    <Container>
      <Flex color={props.color}>
        <Link to="/">Inicio</Link>
        <Link to="/quienesSomos">Quiénes Somos</Link>

        <a href="https://palabrafiel.online.church/" rel="noreferrer">
          En vivo
        </a>
        <a onClick={() => push('/')} href="#agenda">
          Nuestra Agenda
        </a>

        <Link to="/gruposdecrecimiento">Grupos de Crecimiento</Link>

        <Link to="/soynuevo">Soy Nuevo</Link>

        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Ministerios"
          menuVariant="dark"
        >
          <NavDropdown.Item href="https://instituto.ministeriospalabrafiel.org">
            Instituto Bíblico
          </NavDropdown.Item>
        </NavDropdown>

        <div onClick={() => props.saving(true)}>
          <Button>Dar</Button>
        </div>
      </Flex>
    </Container>
  );
};

export default Menu;
