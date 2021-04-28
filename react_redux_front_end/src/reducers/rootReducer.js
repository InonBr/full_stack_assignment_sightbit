/**
 * this reducer will sore the state of the app:
 * logedin -> will chack if there is a connected user.
 * show -> will "tell" the modal to it should be open and close.
 * formType -> will "tell the modal which form should it present."
 */

const initialState = { logedin: false, show: false, formType: '' };

const rootReducer = (state = initialState, action) => {
  const changeState = { ...state };

  switch (action.type) {
    case 'login':
      changeState.logedin = true;
      changeState.show = false;
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
