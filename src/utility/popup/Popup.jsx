// import { Modal, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Popup = (props) => {
  return (
    <div
      onClick={
        props.reload === true
          ? () => window.location.reload(props.reload)
          : null
      }
    >
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          onClick={
            props.reload === true
              ? () => window.location.reload(props.reload)
              : null
          }
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {props.titulo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={
              props.reload === true
                ? () => window.location.reload(props.reload)
                : props.onHide
            }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
