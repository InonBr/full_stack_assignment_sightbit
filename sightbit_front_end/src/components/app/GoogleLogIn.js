import { GoogleLogin } from 'react-google-login';
import { Button, Image } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import '../styles/icon.css';

const GoogleLogInButton = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const cookies = new Cookies();

  const googleSuccess = async (res) => {
    try {
      cookies.set('userToken', res.tokenId);
      window.location = '/';
    } catch (err) {
      console.error({ err: 'Server error', msg: err.message });
    }
  };

  const googleError = (err) => {
    alert('Google Sign In was unsuccessful. Try again later');
    console.error(err);
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
