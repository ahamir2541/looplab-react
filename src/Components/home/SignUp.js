import React from 'react';
import { Card, Form, Button } from 'react-bootstrap'

const SignUp = () => {
    return (
        <Card style={{ 
            background: '#0D65C1', 
            opacity: '0.7' 
            }}>
            <Card.Body className="text-center">
                <h4>Sign up Today</h4>
                <h6>Please fill out this form to register</h6>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="Enter Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Button variant="primary" className="btn-block" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default SignUp;