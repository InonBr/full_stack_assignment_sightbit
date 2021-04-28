import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nevbar from './components/app/Nevbar';
import ModalComponent from './components/app/ModalComponent';
import localForage from 'localforage';
import './components/styles/page.css';
import './App.css';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    localForage.getItem('userToken').then((res) => {
      if (res) {
        return dispatch({ type: 'login' });
      }

      return dispatch({ type: 'logout' });
    });

    // eslint-disable-next-line
  }, [state.logedin]);

  return (
    <div className='App'>
      <Nevbar />
      <ModalComponent />
      <h1 className='mt-5'>Hi there</h1>
      <p>I want to thank you for taking your time and reviewing my code.</p>
      <p>I really appreciate it!</p>
    </div>
  );
}

export default App;
