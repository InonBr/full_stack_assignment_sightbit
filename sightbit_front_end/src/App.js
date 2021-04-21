import './App.css';
import './components/styles/page.css';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import Navbar from './components/app/Navbar';
import ModalCompnent from './components/app/ModalCompnent';
import GoogleLogInButton from './components/app/GoogleLogIn';
import BodyWelcomeMessage from './components/app/BodyWelcomeMessage';

function App() {
  const cookies = new Cookies();
  const [modalState, setModalState] = useState(false);
  const [type, setType] = useState('');

  const hendleModals = (type, bool) => {
    setModalState(bool);
    setType(type);
  };

  return (
    <div className='App'>
      <Navbar hendleModals={hendleModals} />
      {!cookies.get('userToken') && <GoogleLogInButton />}
      <ModalCompnent type={type} bool={modalState} />
      <BodyWelcomeMessage />
    </div>
  );
}

export default App;
