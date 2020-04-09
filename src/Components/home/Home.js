import React from 'react';
import './Home.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import CheckBox from '../Ui/CheckBox'
import SignUp from './SignUp'

const Home = () => {
    return (
        <div className="home" id="Home" >
            <Container>
                <Row className="py-5">
                    <Col md={12} lg={8} >
                        <div className="left_side ">
                            <h1>Build social profiles and gain revenue and profits</h1>
                            <div className="checkBox mt-3">
                                <CheckBox
                                    iconbg="#fff"
                                    iconColor="blue"
                                    lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officiis iste itaque et vel commodi nulla voluptate cupiditate debitis laborum?" />
                            </div>
                            <div className="checkBox mt-3">
                                <CheckBox
                                    iconbg="#fff"
                                    iconColor="blue"
                                    lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officiis iste itaque et vel commodi nulla voluptate cupiditate debitis laborum?" />
                            </div>
                            <div className="checkBox mt-3">
                                <CheckBox
                                    iconbg="#fff"
                                    iconColor="blue"
                                    lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas officiis iste itaque et vel commodi nulla voluptate cupiditate debitis laborum?" />
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div className="right_side mt-3">
                            <SignUp />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;