import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import resumePDF from '../../assets/ChristianSmithResume2023.pdf';


function Resume() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <Container>
            <h1>Resume</h1>
            <br></br>
            <Button href='https://github.com/ChristianSmith46/Portfolio/raw/main/src/assets/ChristianSmithResume2023.pdf'>Download Resume</Button>
            <br></br><br></br>
            <p></p>
            <Row className='justify-content-center'>
                <Col>
                    <h1>Frontend Skills</h1>
                    <ul style={{ fontSize: 30 }}>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Handlebars</li>
                        <li>HTML, CSS, Javascript</li>
                    </ul>
                </Col>
                <Col>
                    <h1>Backend Skills</h1>
                    <ul style={{ fontSize: 30 }}>
                        <li>Express.js</li>
                        <li>MonogDb</li>
                        <li>MySQL</li>
                        <li>Node.js</li>
                        <li>Git</li>
                    </ul>
                </Col>
            </Row>
            <Viewer
                fileUrl={resumePDF}
                plugins={[
                    defaultLayoutPluginInstance,
                ]}
            />
        </Container>


    )
}

export default Resume;