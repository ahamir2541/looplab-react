import React from 'react';
import ContentImg from '../Ui/ContentImg'
import ContentText from '../Ui/ContentText'
import { Container, Row, Col } from 'react-bootstrap'
import createImg from '../../resource/img/create.jpeg'

const ExploreContent = () => {
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col lg={6} >
                        <ContentImg img={createImg} />
                    </Col>
                    <Col lg={6} >
                        <ContentText
                            title="Share what you create"
                            iconbg="black"
                            iconColor="#fff" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExploreContent;