import React from 'react';
import pfp from '../../img/Profile.jpeg'
import { Container } from 'react-bootstrap'

function AboutMe() {
    return (
        <Container>
            <h1>About Me</h1>
            <div>
                <img src={pfp} alt="Profile" width="30%" />
            </div>
            <p style={{paddingTop: 30}}>
                I'm Christian Smith, a software engineer.  I've always loved learning about computers and got hooked on coding when I found out I could create things for myself and others.  I taught myself some languages like java in order to make plugins for games then went on to take a few classes such as cs50. I finally decided to go through a bootcamp in order to get my foot in the door for becoming a profesional, but want to continue doing projects that I'm passionate about.
            </p>
        </Container>
    )
}

export default AboutMe;