import {useState} from 'react';
import './Cooperation.css';
import {ReactComponent as Image} from "images/cooperation.svg";

function Cooperation() {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');

    const handleSubmit = () => {
        console.log("HARDO");
    };

    return (
        <div className="cooperation">
            <h2 className="cooperation-header">
                Are you carpark owner? <br/>
                Do you provide electric vehicles?
            </h2>
            <div className='cooperation-top'>
                <div className='cooperation-left'>
                    <h1>We are proud to invite <br/> business clients to <br/> cooperate with us!</h1>
                    <p>By working with us, you will gain new <br/> customers and a lot of satisfaction with
                        the <br/> support of air purification!</p>
                </div>
                <div className='cooperation-right'>
                    <Image className='cooperation-image'/>
                </div>
            </div>
            <div>
                <div className='cooperation-form'>
                    <h1>Let's talk with us!</h1>
                    <input type='text' placeholder='Name' value={nameValue}
                           onChange={(e) => setNameValue(e.target.value)}/>
                    <input type='text' placeholder='Email' value={emailValue}
                           onChange={(e) => setEmailValue(e.target.value)}/>
                    <textarea placeholder='Message' value={textAreaValue}
                              onChange={(e) => setTextAreaValue(e.target.value)}/>
                    <button type='submit' onChange={handleSubmit}>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    );
}

export default Cooperation;
