import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { loginApi } from '../../lib/api';
import localForage from 'localforage';
import '../styles/forms.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);

  const setLocalForage = (data) => {
    localForage
      .setItem('userToken', data.token)
      .then(() => {
        dispatch({ type: 'login' });
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginApi(data)
      .then((response) => {
        setLocalForage(response.data);
      })
      .catch((error) => {
        const errorMessage = error.response.data.msg;
        setShowError(errorMessage);
      });
  };

  const errMessageToShow = () => {
    return (
      <Form.Group>
        <Form.Label className='red-text center-text' column='lg'>
          Invalid credentials!
        </Form.Label>
      </Form.Group>
    );
  };

  return (
    <Form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor='email'>Email address</Form.Label>
        <Form.Control
          id='email'
          type='email'
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /\S+@\S+.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          placeholder='Enter email'
        />

        {errors.email && (
          <Form.Text className='red-text' role='alert'>
            {errors.email.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Password</Form.Label>

        <Form.Control
          id='password'
          name='password'
          type='password'
          {...register('password', { required: 'You must specify a password' })}
          placeholder='password'
        />

        {errors.password && (
          <Form.Text className='red-text' role='alert'>
            {errors.password.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>{showError && errMessageToShow()}</Form.Group>

      <Button variant='primary' type='submit'>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
