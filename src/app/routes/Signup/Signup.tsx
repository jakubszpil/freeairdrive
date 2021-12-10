import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const navigation = useNavigate();

  const onSignUpClicked = async () => {
    alert('SignUp clicked');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {errorMessage && <div className="fail">{errorMessage}</div>}
      <input type="email" value={emailValue} onChange={e => setEmailValue(e.target.value)} placeholder="E-mail"></input>
      <input type="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} placeholder="Password"></input>
      <input type="password" value={confirmPasswordValue} onChange={e => setConfirmPasswordValue(e.target.value)} placeholder="Password"></input>
      <button onClick={onSignUpClicked} disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue}>
        SIGN UP
      </button>
      <button onClick={() => navigation('/login')}>ALREADY HAVE AN ACCOUNT? SIGN IN</button>
    </div>
  );
};

export default Signup;
