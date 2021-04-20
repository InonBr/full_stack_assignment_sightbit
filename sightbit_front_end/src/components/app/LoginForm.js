import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import '../styles/forms.css';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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

      <Button variant='primary' type='submit'>
        Register
      </Button>
    </Form>
  );
};

export default LoginForm;
