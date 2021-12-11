import './Login.css';

import Section from 'app/components/Section';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <Section className="login text-center">
      <h1>awPark</h1>
      <h2>Nice to see you again!</h2>
      <LoginForm />
    </Section>
  );
};

export default Login;
