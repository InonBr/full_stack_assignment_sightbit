import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import LoginForm from './LogInForm';
import RegisterForm from './RegisterForm';

function ModalComponent() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const titleText = () => {
    if (state.formType === 'loginForm') {
      return 'Welcome back!';
    }

    return 'Thank you for joining us! 😸';
  };

  return (
    <Modal show={state.show} onHide={() => dispatch({ type: 'closeModal' })}>
      <Modal.Header closeButton>
        <Modal.Title>{titleText()}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {state.formType === 'loginForm' && <LoginForm />}
        {state.formType === 'registerForm' && <RegisterForm />}
      </Modal.Body>
    </Modal>
  );
}

export default ModalComponent;
