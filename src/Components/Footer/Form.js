import React from 'react';
import { Form, Button,  } from 'react-bootstrap'

const FormPage = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Message </Form.Label>
            <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form>
    );
};

export default FormPage;