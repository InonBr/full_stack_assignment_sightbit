import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

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

  const logInSubmit = (event) => {
    event.preventDefault();
    console.log('log in done');
  };

  // const logInForm = () => {
  //   return (
  //     <Form onSubmit={(event) => logInSubmit(event)}>
  //       <Form.Group controlId='formBasicEmail'>
  //         <Form.Label>Email address</Form.Label>
  //         <Form.Control type='email' placeholder='Enter email' />
  //       </Form.Group>

  //       <Form.Group controlId='formBasicPassword'>
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control type='password' placeholder='Password' />
  //       </Form.Group>

  //       <Button variant='primary' type='submit'>
  //         login
  //       </Button>
  //     </Form>
  //   );
  // };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {bodyMessage}
        {props.type === 'login' && <LoginForm />}
        {props.type === 'register' && <RegisterForm />}
      </Modal.Body>
    </Modal>
  );
}

export default ModalCompnent;
