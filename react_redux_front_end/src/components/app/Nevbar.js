import { Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import GoogleLogInButton from './GoogleLogInButton';
import '../styles/nevbar.css';

function Nevbar() {
  const loginState = useSelector((state) => state.logedin);
  const dispatch = useDispatch();
  // const [x, setX] = useState('');

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
        <GoogleLogInButton />
        <Button
          className='mb-3'
          variant='outline-dark'
          // onClick={() => props.hendleModals('login', true)}
        >
          Login
        </Button>

        <Button
          className='mb-3'
          variant='outline-dark'
          // onClick={() => props.hendleModals('register', true)}
        >
          Register
        </Button>

        <Button className='mb-3' variant='outline-dark'>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Nevbar;
