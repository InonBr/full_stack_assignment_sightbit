import { Navbar, Nav, Button, Form } from 'react-bootstrap';

function NavBar(props) {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>Navbar</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/Welcome'>Welcome</Nav.Link>
        </Nav>

        <Form inline>
          <div className='mr-2'>
            <Button
              variant='outline-info'
              onClick={() => props.hendleModals('login', true)}
            >
              Login
            </Button>
          </div>

          <Button
            variant='outline-info'
            onClick={() => props.hendleModals('register', true)}
          >
            Register
          </Button>

          <div className='ml-2'>
            <Button variant='outline-info'>Logout</Button>
          </div>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
