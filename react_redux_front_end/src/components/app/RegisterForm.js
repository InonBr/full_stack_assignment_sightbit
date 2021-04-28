import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import localForage from 'localforage';
import '../styles/forms.css';

import { registerApi } from '../../lib/api';

const RegisterForm = () => {
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
    watch,
  } = useForm();

  const password = useRef('');
  password.current = watch('password', '');

  const onSubmit = (data) => {
    registerApi(data)
      .then((response) => {
        setLocalForage(response.data);
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes('duplicate')) {
          setShowError(true);
        }
      });
  };

  const errMessageToShow = () => {
    return (
      <Form.Group>
        <Form.Label className='red-text center-text' column='lg'>
          User already exists!
        </Form.Label>
      </Form.Group>
    );
  };

  return (
    <Form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor='username'>Username</Form.Label>
        <Form.Control
          id='username'
          aria-invalid={errors.username ? 'true' : 'false'}
          {...register('username', { required: true })}
          type='text'
          placeholder='Username'
        />

        {errors.username && errors.username.type === 'required' && (
          <Form.Text className='red-text' role='alert'>
            Username is required
          </Form.Text>
        )}
      </Form.Group>

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
          {...register('password', {
            required: 'You must specify a password',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })}
          placeholder='password'
        />

        {errors.password && (
          <Form.Text className='red-text' role='alert'>
            {errors.password.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor='password'>Confirm Password</Form.Label>
        <Form.Control
          id='passwordConfirm'
          name='passwordConfirm'
          type='password'
          {...register('passwordConfirm', {
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          })}
          placeholder='Confirm Password'
        />

        {errors.passwordConfirm && (
          <Form.Text className='red-text' role='alert'>
            {errors.passwordConfirm.message}
          </Form.Text>
        )}
      </Form.Group>

      {showError && errMessageToShow()}

      <Button variant='primary' type='submit'>
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
