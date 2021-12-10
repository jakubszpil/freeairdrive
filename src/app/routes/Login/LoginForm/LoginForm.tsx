import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';

type LoginFormValues = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = data => console.log(data);

  const onReset = () => clearErrors();

  return (
    <Form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <Form.Group>
        <FloatingLabel controlId="email" label="Your Email" className="mb-3">
          <Form.Control placeholder="Enter Your Email here" {...register('email', { required: true })} />
        </FloatingLabel>
        {errors.email && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group>
        <FloatingLabel controlId="password" label="Your Password" className="mb-3">
          <Form.Control placeholder="Enter Your Email here" type="password" {...register('password', { required: true })} />
        </FloatingLabel>
        {errors.password && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
      <Button variant="text" type="reset" className="ms-3">
        Reset
      </Button>
    </Form>
  );
}

export default LoginForm;
