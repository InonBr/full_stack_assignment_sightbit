import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function ModalCompnent(props) {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState('');
  const [bodyMessage, setBodyMessage] = useState('');

  useEffect(() => {
    setShowModal(props.bool);
    setType(props.type);
    bodyText();

    // eslint-disable-next-line
  }, [props]);

  const handleClose = () => {
    setShowModal(false);
    setType('');
    props = null;
  };

  const bodyText = () => {
    if (props.type === 'login') {
      setBodyMessage('Wlecome back!');
    } else if (props.type === 'register') {
      setBodyMessage('Wlecome friend!');
    } else {
      setBodyMessage('');
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {bodyMessage}
        {props.type === 'login' && <LoginForm />}
        {props.type === 'register' && (
          <RegisterForm handleClose={handleClose} />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ModalCompnent;
