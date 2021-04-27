import { GoogleLogin } from 'react-google-login';
import { Button, Image } from 'react-bootstrap';
import '../styles/icon.css';

const GoogleLogInButton = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const googleSuccess = async (res) => {
    try {
      console.log(res.tokenId);
      //   cookies.set('userToken', res.tokenId);
      //   window.location = '/';
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
          className='mb-3'
          variant='outline-dark'
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <Image
            id='google-small'
            src='https://pics.freeicons.io/uploads/icons/png/2659939281579738432-512.png'
            alt='google logo'
          />
          <span className='ml-2 mr-2'> Sign in with Google</span>
        </Button>
      )}
      onSuccess={googleSuccess}
      onFailure={googleError}
      cookiePolicy='single_host_origin'
    />
  );
};

export default GoogleLogInButton;
