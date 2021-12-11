import './Overview.css';
import {ReactComponent as Image} from "images/overview2.svg";
import {ReactComponent as Image2} from "images/overview1.svg";
import {useNavigate} from 'react-router-dom';

function Overview() {

    const navigation = useNavigate();

    const handleClick = () => {
        navigation('/signup');
    }

    return (
        <div className="overview">
            <div className='overview-top'>
                <div className='overview-left'>
                    <h1>
                        We deliver you <br/> our system to find <br/> the fastest way!
                    </h1>
                    <p>By choosing our services, <br/> you support the process of purifying the air <br/> from
                        pollutants generated
                        by cars <br/> with internal combustion engines.</p>
                </div>
                <div className='overview-right'>
                    <Image/>
                </div>
            </div>
            <div className='overview-middle'>
                <h1>What are our main goals?</h1>
                <div className='middle-container'>
                    <div className='middle-circle'>
                        Reduction of traffic jams
                    </div>
                    <div className='middle-circle'>
                        Reduction of air pollution
                    </div>
                    <div className='middle-circle'>
                        Raising the
                        level of electric vehicles
                    </div>
                    <div className='middle-circle'>
                        Ordering scooters
                    </div>
                </div>
            </div>
            <div className='overview-bottom'>
                <div className='bottom-left'>
                    <Image2/>
                </div>
                <div className='bottom-right'>
                    <h1>
                        Try it today!
                    </h1>
                    <p>Let's change the world for the better. Together!</p>
                    <button onClick={handleClick}>SIGN UP FOR FREE</button>
                </div>
            </div>
        </div>
    );
}

export default Overview;
