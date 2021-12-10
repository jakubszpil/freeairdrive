import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const navigation = useNavigate();

    const onLogInClicked = async () => {
        alert("LoginPage clicked");
    }

    return <div>
        <h1>Login</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <input type='email' value={emailValue} onChange={e => setEmailValue(e.target.value)}
               placeholder='E-mail'></input>
        <input type='password' value={passwordValue} onChange={e => setPasswordValue(e.target.value)}
               placeholder='Password'></input>
        <button onClick={onLogInClicked} disabled={!emailValue || !passwordValue}>LOGIN</button>
        <button onClick={() => navigation('/forgot-password')}>FORGOT YOUR PASSWORD?</button>
        <button onClick={() => navigation('/signup')}>DON'T HAVE AN ACCOUNT? SIGN UP</button>
    </div>
}

export default LoginPage;
