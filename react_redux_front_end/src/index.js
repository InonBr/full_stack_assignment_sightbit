import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './reducers/loginReducer';

const loginStore = createStore(loginReducer);

ReactDOM.render(
  <Provider store={loginStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
