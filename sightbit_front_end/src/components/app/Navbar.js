import { Navbar, Nav, Button, Form, Image } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import '../styles/navbar.css';

function NavBar(props) {
  const cookies = new Cookies();

  const loginButton = () => {
    return (
      <div className='mr-2'>
        <Button
          variant='outline-info'
          onClick={() => props.hendleModals('login', true)}
        >
          Login
        </Button>
      </div>
    );
  };

  const registerButton = () => {
    return (
      <Button
        variant='outline-info'
        onClick={() => props.hendleModals('register', true)}
      >
        Register
      </Button>
    );
  };

  const logoutButton = () => {
    return (
      <div className='ml-2'>
        <Button variant='outline-info' onClick={() => handleLogout()}>
          Logout
        </Button>
      </div>
    );
  };

  const handleLogout = () => {
    cookies.remove('userToken');
    window.location = '/';
  };

  return (
    <>
      <Navbar className='padding-fix' bg='dark' variant='dark'>
        <Navbar.Brand href='/'>
          <Image
            id='singbit-logo'
            src='https://res.cloudinary.com/crunchbase-production/image/upload/xlblui60a6ublu9cvsfv'
          />
        </Navbar.Brand>
        <Nav className='mr-auto' />

        <Form inline>
          {!cookies.get('userToken') && loginButton()}

          {!cookies.get('userToken') && registerButton()}

          {cookies.get('userToken') && logoutButton()}
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
