import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css'

const Navbars = () => {
    return (
        <Navbar className="Navbar" sticky="top"  variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">LoopLab</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#Explore">Explore</Nav.Link>
                        <Nav.Link href="#Create">Create</Nav.Link>
                        <Nav.Link href="#Share">Share</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbars;