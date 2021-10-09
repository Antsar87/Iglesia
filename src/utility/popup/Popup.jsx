// import { Modal, Button } from 'react-bootstrap';
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

// const Pop = styled.div`
//   height: 100vh;
//   width: 100%;
//   z-index: 5;
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.7);
//   height: 100vh;
//   transition: opacity 500ms;
//   visibility: visible;
// `;

// const PopBox = styled.div`
//   text-align: center;
//   padding: 20px;
//   width: 900px;
//   height: 400px;
//   background: #696969ef;
//   border-radius: 5px;
//   transition: all 5s ease-in-out;
//   z-index: 11;
// `;
const Popup = (props) => {
  return (
    <>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.titulo}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default Popup;
