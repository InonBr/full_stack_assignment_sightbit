import { Navbar, Nav, Button, Form } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>Navbar</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav>

        <Form inline>
          <Button variant='outline-info'>Logout</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
