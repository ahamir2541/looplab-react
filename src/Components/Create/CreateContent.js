import React from 'react';
import ContentImg from '../Ui/ContentImg'
import ContentText from '../Ui/ContentText'
import { Container, Row, Col } from 'react-bootstrap'
import createImg from '../../resource/img/create.jpeg'

const ExploreContent = () => {
    return (
        <div  className="py-5 bg-dark text-light">
            <Container>
                <Row>
                    <Col lg={6} >
                    <ContentText 
                    title="Create Your Passion"
                    iconbg="#fff"
                    iconColor="blue" />
                    </Col>
                    <Col lg={6} >
                        <ContentImg img={createImg} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExploreContent;