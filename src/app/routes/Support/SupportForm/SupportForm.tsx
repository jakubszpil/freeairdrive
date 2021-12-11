import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';

import './SupportForm.css';

function SupportForm() {
  

  return (

    <Form
      className="login-form forms-support"
    >
      <h1 className='text-secondary mb-5 fw-bold'>Didn't find the answer?</h1>
      <Form.Group>
        <FloatingLabel
          controlId="name"
          label="Name"
          className="mb-3 text-center"
        >
          <Form.Control
            placeholder="Enter Your Name here"
          />
        </FloatingLabel>
        
      </Form.Group>

      <Form.Group>
        <FloatingLabel
          controlId="email"
          label="Email"
          className="mb-3 text-center"
        >
          <Form.Control
            placeholder="Enter Your Email here"
            type="email"
          />
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
  );
}

export default SupportForm;
