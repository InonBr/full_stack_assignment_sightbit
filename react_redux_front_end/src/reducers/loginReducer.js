const initialLoginState = { logedin: false };

const loginReducer = (state = initialLoginState, action) => {
  console.log(action.type);
  if (action.type === 'login') {
    return { logedin: true };
  } else {
    return { logedin: false };
  }
};

export default loginReducer;
