import { GoogleLogin } from 'react-google-login';
import { Button, Image } from 'react-bootstrap';
import '../styles/icon.css';

const GoogleLogInButton = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const googleSuccess = async (res) => {
    console.log(res);
  };

  const googleError = () => {
    alert('Google Sign In was unsuccessful. Try again later');
  };

  return (
    <GoogleLogin
      clientId={googleClientId}
      render={(renderProps) => (
        <Button
          className='mt-3'
          variant='outline-primary'
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <Image
            id='google-small'
            src='https://pics.freeicons.io/uploads/icons/png/2659939281579738432-512.png'
          />
          <span className='ml-3'> Google Sign In </span>
        </Button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleError}
      cookiePolicy='single_host_origin'
    />
  );
};

export default GoogleLogInButton;
