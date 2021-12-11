import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';

import "./HomeStats.css"

import {ReactComponent as Image} from "../../../../images/cuate.svg";
import {useNavigate} from "react-router-dom";
import {APP_PATHS} from "../../../contants";


function HomeStats() {
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(APP_PATHS.OVERVIEW);
    }

    return (
        <div className="home-stats mt-5">
            <h1 className='text-secondary mb-2 mt-2 fw-bold text-center'>STATISTICS DON'T LIE</h1>
            <div className="home-stats text-center d-flex">
                <div className="fw-bold d-flex justify-content-center flex-column align-items-end text-start">
                    <p className="text-shadow fs-2">
                        Did you know, that...
                    </p>
                    <p className="text-shadow fs-5">
                        Gasoline cars are responsible <br/>
                        for almost 15% of air pollution?
                    </p>
                    <Button className='bg-secondary w-75 p-3 fw-bold shadow align-self-center tomaszStopaIbmMaster' onClick={handleClick}>
                        MAKE IT BETTER
                    </Button>
                </div>

          <Image className='image-start ms-5'/>
      </div>
    </div>
  )
}

export default HomeStats;
