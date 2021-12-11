import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';

import "./HomeStart.css"
import {ReactComponent as Image} from "../../../../images/pana.svg";
import {useNavigate} from "react-router-dom";
import {APP_PATHS} from "../../../contants";

type LoginFormValues = {
    email: string;
    password: string;
};

function HomeStart() {
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(APP_PATHS.LOGIN);
    }

    return (
        <div className="home-start text-center d-flex">
            <div className="fw-bold w-50 d-flex justify-content-center flex-column align-items-end text-start">
                <p className="text-shadow w-50 fs-2">We make parking better<br/>
                    for the environment <br/>
                    <span className='fs-6'>and easier for drivers!</span></p>
                <Button className='p-3 fw-bold shadow w-25 align-self-end' onClick={handleClick}>
                    LET'S START
                </Button>
            </div>
            <Image className='image-start'/>
        </div>
    )
}

export default HomeStart;
