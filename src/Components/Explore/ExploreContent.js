import React from 'react';
import ContentImg from '../Ui/ContentImg'
import ContentText from '../Ui/ContentText'
import { Container, Row, Col } from 'react-bootstrap'
import exploreImg from '../../resource/img/explore.jpeg'

const ExploreContent = () => {
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col lg={6} >
                        <ContentImg img={exploreImg} />
                    </Col>
                    <Col lg={6} >
                        <ContentText 
                        title="Explore Learn & Connect"
                        iconbg="black"
                        iconColor="#fff" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExploreContent;