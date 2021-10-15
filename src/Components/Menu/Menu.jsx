import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useHistory } from 'react-router';
import { device } from '../../Responsive/Responsive';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Media = styled.div`
  @media ${device.laptop} {
    .containerDesktop {
      display: block;
    }
    .container {
      display: none;
    }
  }
`;

const ContainerDesktop = styled.div`
  margin-top: 20px;
  height: 100px;
  display: none;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a,
  button {
    display: inline;
    text-decoration: none;
    color: ${(props) => (props.color === 'white' ? 'white' : '#3c3c3b')};
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
    <Media>
      <ContainerDesktop className="containerDesktop">
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
      </ContainerDesktop>

      <Navbar collapseOnSelect expand="xl">
        <Container style={{ margin: '20px 0' }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/quienesSomos">Quiénes Somos</Nav.Link>
              <Nav.Link href="https://palabrafiel.online.church/">
                En vivo
              </Nav.Link>
              <Nav.Link href="#agenda" onClick={() => push('/')}>
                Nuestra Agenda
              </Nav.Link>
              <Nav.Link href="/gruposdecrecimiento">Grupos de Crecimiento</Nav.Link>

              <Nav.Link href="/soynuevo">Soy Nuevo</Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Ministerios"
                menuVariant="dark"
              >
                <NavDropdown.Item href="https://instituto.ministeriospalabrafiel.org">
                  Instituto Bíblico
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => props.saving(true)}>Dar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Media>
  );
};

export default Menu;
