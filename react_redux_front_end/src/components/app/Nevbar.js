import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogInButton from './GoogleLogInButton';
import localForage from 'localforage';
import '../styles/nevbar.css';

function Nevbar() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

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

  const logout = () => {
    localForage.removeItem('userToken').then(() => {
      dispatch({ type: 'logout' });
    });
  };

  const logoutButton = () => {
    return (
      <Button className='mb-3' variant='outline-dark' onClick={() => logout()}>
        Logout
      </Button>
    );
  };

  /**
   * the buttons on the nevbar will be dependent on the state of the user.
   */

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
