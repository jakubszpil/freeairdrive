import {Button} from 'react-bootstrap';

import "./HomeBanner.css"
import {useNavigate} from "react-router-dom";
import {APP_PATHS} from "app/constants";

function HomeBanner() {
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(APP_PATHS.COOPERATION);
    }

    return (
        <div className="home-banner p-4 text-white text-center mt-5">
            <h1 className='mb-5 fw-bold'>BECOME OUR PARTNER</h1>
            <p className='fs-4'>Are you carpark owner? Maybe you delivery electric vehicles in cites? <br/>
                Start a cooperation with us and have an influence in air purification!</p>
            <Button variant="secondary" className="text-white fw-bold w-25 p-3" onClick={handleClick}>
                CONTACT US
            </Button>
        </div>
    )
}

export default HomeBanner;
