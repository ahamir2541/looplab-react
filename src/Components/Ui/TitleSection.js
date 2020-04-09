import React from 'react';
import Button from './Button'
import { Container, Row, Col } from 'react-bootstrap'

const TitleSection = (props) => {
    return (
        <div className="title_section py-5 text-light text-center" style={{
            background: `${props.bg}`,
        }} >
            <Container>
                <Row>
                    <Col>
                       <h2 className="display-4">{props.heading} </h2>
                       <p className="lead">{props.headingText} </p>
                       <Button />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TitleSection;