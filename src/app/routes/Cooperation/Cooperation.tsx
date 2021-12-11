import { useState } from 'react';
import './Cooperation.css';
import { ReactComponent as Image } from 'images/cooperation.svg';
import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';

function Cooperation() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleSubmit = () => {
    console.log('HARDO');
  };

  return (
    <div className="cooperation">
      <h2 className="cooperation-header">
        Are you carpark owner? <br />
        Do you provide electric vehicles?
      </h2>
      <div className="cooperation-top">
        <div className="cooperation-left">
          <h1 className="text-secondary mb-5 fw-bold">
            We are proud to invite <br /> business clients to <br /> cooperate
            with us!
          </h1>
          <p>
            By working with us, you will gain new <br /> customers and a lot of
            satisfaction with the <br /> support of air purification!
          </p>
        </div>
        <div className="cooperation-right">
          <Image className="cooperation-image" />
        </div>
      </div>

      <Form className="cooperation-form forms-support">
        <h1 className="text-secondary mb-5 fw-bold">Let's talk with us!</h1>
        <Form.Group>
          <FloatingLabel
            controlId="name"
            label="Name"
            className="mb-3 text-center"
          >
            <Form.Control placeholder="Enter Your Name here" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group>
          <FloatingLabel
            controlId="email"
            label="Email"
            className="mb-3 text-center"
          >
            <Form.Control placeholder="Enter Your Email here" type="email" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group>
          <FloatingLabel
            controlId="message"
            label="Message"
            className="mb-3 text-center"
          >
            <textarea className="form-control h-25"></textarea>
          </FloatingLabel>
        </Form.Group>

        <div className="mb-3">
          <Button
            className="login-form__button p-2 text-uppercase"
            variant="primary"
            type="submit"
          >
            Send message
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Cooperation;

/*


                    <input className='' type='text' placeholder='Name' value={nameValue}
                           onChange={(e) => setNameValue(e.target.value)}/>
                    <input type='text' placeholder='Email' value={emailValue}
                           onChange={(e) => setEmailValue(e.target.value)}/>
                    <textarea placeholder='Message' value={textAreaValue}
                              onChange={(e) => setTextAreaValue(e.target.value)}/>
                    <button type='submit' onChange={handleSubmit}>SEND MESSAGE</button>


*/
