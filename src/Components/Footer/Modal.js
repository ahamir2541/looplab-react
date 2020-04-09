import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'
import Form from './Form'
import './Modal.css'

class ModalPage extends Component {

    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                <Button
                    variant="primary"
                    onClick={() => this.handleModal()} >
                    Contact Us
                </Button>
                <Modal 
                show={this.state.show} 
                onHide={ () => this.handleModal() }
                centered
                >
                    <Modal.Header  closeButton>
                        <Modal.Title>Contact Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form/> 
                    </Modal.Body>
                    
                </Modal>
            </div>
        );
    }
}

export default ModalPage;