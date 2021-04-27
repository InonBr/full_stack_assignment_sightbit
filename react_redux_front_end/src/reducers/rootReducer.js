const initialState = { logedin: false, show: false, formType: '' };

const rootReducer = (state = initialState, action) => {
  const changeState = { ...state };

  switch (action.type) {
    case 'login':
      changeState.logedin = true;
      return changeState;

    case 'logout':
      changeState.logedin = false;
      return changeState;

    case 'loginForm':
      changeState.show = true;
      changeState.formType = 'loginForm';
      return changeState;

    case 'registerForm':
      changeState.show = true;
      changeState.formType = 'registerForm';
      return changeState;

    case 'closeModal':
      changeState.show = false;
      changeState.formType = '';
      return changeState;

    default:
      return { logedin: false, show: false, formType: '' };
  }
};

export default rootReducer;
