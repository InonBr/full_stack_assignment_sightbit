import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import GoogleLogInButton from './GoogleLogInButton';
import { loginApi, registerApi } from '../../lib/api';
import '../styles/nevbar.css';

function Nevbar() {
  const loginState = useSelector((state) => state.logedin);
  const dispatch = useDispatch();

  const loginButton = () => {
    return (
      <Button
        className='mb-3'
        variant='outline-dark'
        onClick={() => dispatch({ type: 'login' })}
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
        onClick={() => dispatch({ type: 'login' })}
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

  // useEffect(() => {
  //   if (loginState) {
  //     setX(`${loginState}`);
  //   } else {
  //     setX(`${loginState}`);
  //   }
  // }, [loginState]);

  // <Button variant='primary' onClick={() => dispatch({ type: 'login' })}>
  //       login
  //     </Button>

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
        {!loginState && loginButton()}
        {!loginState && <GoogleLogInButton />}
        {!loginState && registerButton()}
        {loginState && logoutButton()}
      </div>
    </div>
  );
}

export default Nevbar;
