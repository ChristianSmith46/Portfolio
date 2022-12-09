import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function Resume() {
    return (
        <Container>
            <h1>Resume</h1>
            <Button href='https://github.com/ChristianSmith46/Portfolio/raw/main/src/assets/resume2022.pdf'>Download Resume</Button>
            <p></p>
            <Row className='justify-content-center'>
                <Col>
                    <h2>Frontend Skills</h2>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Handlebars</li>
                        <li>HTML, CSS, Javascript</li>
                    </ul>
                </Col>
                <Col>
                    <h2>Backend Skills</h2>
                    <ul>
                        <li>Express.js</li>
                        <li>MonogDb</li>
                        <li>MySQL</li>
                        <li>Node.js</li>
                        <li>Git</li>
                    </ul>
                </Col>
            </Row>
        </Container>


    )
}

export default Resume;