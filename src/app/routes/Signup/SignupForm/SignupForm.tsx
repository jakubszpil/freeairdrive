import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';

type SignupFormValues = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function SignupForm() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const onSubmit: SubmitHandler<SignupFormValues> = data => console.log(data);

  const onReset = () => clearErrors();

  return (
    <Form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
      <Form.Group>
        <FloatingLabel controlId="name" label="Your Name" className="mb-3">
          <Form.Control placeholder="Enter Your Name here" {...register('name', { required: true })} />
        </FloatingLabel>

        {errors.name && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

      <Form.Group>
        <FloatingLabel controlId="surname" label="Your Surname" className="mb-3">
          <Form.Control placeholder="Enter Your Surnmae here" {...register('surname', { required: true })} />
        </FloatingLabel>
        {errors.surname && <Alert variant="danger">This field is required</Alert>}
      </Form.Group>

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

export default SignupForm;
