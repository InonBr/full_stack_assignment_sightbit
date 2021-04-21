import './App.css';
import { useState } from 'react';
import Navbar from './components/app/Navbar';
import ModalCompnent from './components/app/ModalCompnent';
import GoogleLogInButton from './components/app/GoogleLogIn';

function App() {
  const [modalState, setModalState] = useState(false);
  const [type, setType] = useState('');

  const hendleModals = (type, bool) => {
    setModalState(bool);
    setType(type);
  };

  return (
    <div className='App'>
      <Navbar hendleModals={hendleModals} />
      <GoogleLogInButton />
      <ModalCompnent type={type} bool={modalState} />
    </div>
  );
}

export default App;
