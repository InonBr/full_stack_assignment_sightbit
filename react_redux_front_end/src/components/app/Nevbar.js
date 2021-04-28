import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogInButton from './GoogleLogInButton';
import '../styles/nevbar.css';

function Nevbar() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);

  const loginButton = () => {
    return (
      <Button
        className='mb-3'
        variant='outline-dark'
        onClick={() => dispatch({ type: 'loginForm' })}
      >
        Login
      </Button>
    );
  };

  const registerButton = () => {
    return (
      <Button
        className='mb-3'
        variant='outline-dark'
        onClick={() => dispatch({ type: 'registerForm' })}
      >
        Register
      </Button>
    );
  };

  const logoutButton = () => {
    return (
      <Button
        className='mb-3'
        variant='outline-dark'
        onClick={() => dispatch({ type: 'logout' })}
      >
        Logout
      </Button>
    );
  };

  return (
    <div className='nevbar-style'>
      <div>
        <Image
          id='singbit-logo'
          src='https://res.cloudinary.com/crunchbase-production/image/upload/xlblui60a6ublu9cvsfv'
          alt='singbit-logo'
        />
      </div>
      <div className='row justify-content-around'>
        {!state.logedin && loginButton()}
        {!state.logedin && <GoogleLogInButton />}
        {!state.logedin && registerButton()}
        {state.logedin && logoutButton()}
      </div>
    </div>
  );
}

export default Nevbar;
