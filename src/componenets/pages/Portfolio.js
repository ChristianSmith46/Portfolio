import React from 'react';
import { Row, Container } from 'react-bootstrap';

import Project from '../Project';


const projects = [
    {
        name: "Tough Decisions",
        description: "Tough Decisions is a MERN Stack web app game using socket.io to create a multiplayer experience where users can battle it out to determine who has the greatest ideas.",
        imageLink: "https://user-images.githubusercontent.com/107509704/208547754-32ee16c8-d18a-4fea-8ac8-79ec3257c3a4.png",
        githubLink: "https://github.com/garrettj94/ToughDecisions",
        deployedLink: "https://toughdecisions.herokuapp.com/"
    },
    {
        name: "Flutter",
        description: "Flutter is a blog project I worked on with a few classmates that is intended to be for other new developers who are learning and want to share what they've learned.",
        imageLink: "https://i.gyazo.com/843db949f3db5599bdfc07d1cd32a3f4.png",
        githubLink: "https://github.com/ChristianSmith46/Flutter",
        deployedLink: "https://safe-reaches-80052.herokuapp.com/"
    },
    {
        name: "Sportcast",
        description: "Sportcast is a web app that will allow you to at your favorite NFL team's upcoming games and what the projected weather will be like at the game and who they play against.",
        imageLink: "https://raw.githubusercontent.com/ChristianSmith46/Sportcast/main/assets/Project1Screenshot.png",
        githubLink: "https://github.com/ChristianSmith46/Sportcast",
        deployedLink: "https://christiansmith46.github.io/Sportcast/"
    },
    {
        name: "Just Another Text Editor",
        description: "J.A.T.E is a project that allows a user to write code/notes down that will persist when refreshed and can be downloaded for offline use.",
        imageLink: "https://i.gyazo.com/9d3590045b6490a80acfd7a2d38d3f0c.png",
        githubLink: "https://github.com/ChristianSmith46/Just-Another-Text-Editor",
        deployedLink: "https://shrouded-cove-36530.herokuapp.com/"
    },
    {
        name: "Daily Planner",
        description: "Daily Planner is a web app that allows you to set notes for certain times and will color code the time to let you know which items are still to come.",
        imageLink: "https://i.gyazo.com/218c95739781b67db24edb57dea66d7f.png",
        githubLink: "https://github.com/ChristianSmith46/Daily-Planner",
        deployedLink: "https://christiansmith46.github.io/Daily-Planner/"
    },
    {
        name: "Timed Quiz App",
        description: "Timed Quiz App is a web app that asks a couple questions.  You get a certain amount of time to answer and if you get a question wrong you are docked time.",
        imageLink: "https://i.gyazo.com/00788801298279c1cbce4940d8b0ae70.png",
        githubLink: "https://github.com/ChristianSmith46/Timed-Quiz-App",
        deployedLink: "https://christiansmith46.github.io/Timed-Quiz-App/"
    }
]

function Portfolio() {
    return (
        <Container>
            <h1 className='text-center'>Projects</h1>
            <Row className='justify-content-center'>
                {projects.map((project) => <Project key={project.name} project={project}/>)}
            </Row>
        </Container>
    )
}

export default Portfolio;