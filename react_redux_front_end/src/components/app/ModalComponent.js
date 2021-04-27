import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import LoginForm from './LogInForm';

function ModalComponent() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Modal show={state.show} onHide={() => dispatch({ type: 'closeModal' })}>
      <Modal.Header closeButton>
        {/* <Modal.Title>{type}</Modal.Title> */}
        <Modal.Title>hold my beer for now</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* {bodyMessage} */}
        {state.formType === 'loginForm' && <LoginForm />}
        {/* {props.type === 'register' && ( */}
        {/* <RegisterForm handleClose={handleClose} /> */}
        {/* )} */}
      </Modal.Body>
    </Modal>
  );
}

export default ModalComponent;
