import {Button, FloatingLabel, Form, FormGroup} from "react-bootstrap";

import "./OrderForm.css";

type LoginFormValues = {
    email: string;
    password: string;
};

function OrderForm() {

    return (
        <Form className="login-form mt-5">
            <Form.Group>
                <FloatingLabel
                    controlId="adress"
                    label="Adress"
                    className="mb-3 text-center"
                >
                    <Form.Control
                        placeholder="Enter Your Adress here"
                    />
                </FloatingLabel>
            </Form.Group>

            <FormGroup>
                <FloatingLabel
                    controlId="adress"
                    label="Adress"
                    className="mb-3 text-center"
                >
                    <Form.Select>
                        <option>Electric scooter</option>
                        <option>Electric bike</option>
                        <option>Electric motor scooter</option>
                    </Form.Select>
                </FloatingLabel>
            </FormGroup>


            <Form.Group>
                <FloatingLabel
                    controlId="time"
                    label="Time"
                    className="mb-3 text-center"
                >
                    <Form.Control
                        placeholder="Choose hour"
                        type="time"
                    />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <FloatingLabel
                    controlId="time"
                    label=""
                    className="mb-3 text-center"
                >
                    <Form.Check type="checkbox" label="Tomorrow"/>
                </FloatingLabel>
            </Form.Group>

            <div className="mb-3">
                <Button
                    className="login-form__button p-2 text-uppercase"
                    variant="primary"
                    type="submit"
                >
                    Order
                </Button>
            </div>
        </Form>
    );
}

export default OrderForm;