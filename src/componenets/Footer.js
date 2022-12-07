
import { Row, Col } from 'react-bootstrap';

import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <div style={{ position: "fixed", bottom: 0, backgroundColor: "#0D3B66", width: '100%'}}>
            <Row>
                <Col md="8">
                    <h3 style={{color: '#FAF0CA'}}>Website created by Christian Smith</h3>
                </Col>
                <Col md="4">
                    <ul>
                        <li>
                            <SocialIcon target={'_blank'} url="https://github.com/ChristianSmith46" fgColor='#FAF0CA' bgColor='#EE964B'/>
                        </li>
                        <li>
                            <SocialIcon target={'_blank'} url="https://www.linkedin.com/in/christian-smith-80b4a3243/" fgColor='#FAF0CA' bgColor='#EE964B'/>
                        </li>
                        <li>
                            <SocialIcon target={'_blank'} url="https://twitter.com/CSmithTech46" fgColor='#FAF0CA' bgColor='#EE964B'/>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;