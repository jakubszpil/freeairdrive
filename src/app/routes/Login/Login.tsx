import Section from 'app/components/Section';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <Section className="login">
      <h1 className="mt-3 mb-4">Login</h1>
      <LoginForm />
    </Section>
  );
};

export default Login;
