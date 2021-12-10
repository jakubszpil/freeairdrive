import Section from 'app/components/Section';
import SignupForm from './SignupForm';

const Signup = () => {
  return (
    <Section className="signup">
      <h1 className="mt-3 mb-4">Sign Up</h1>

      <SignupForm />
    </Section>
  );
};

export default Signup;
