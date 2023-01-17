import React from 'react';
import {Card} from 'react-bootstrap';


function Project({project}) {
    return (
        <Card md={4} border="dark" key={project.name} style={{ width: '18rem' }}>
            <Card.Header>{project.name}</Card.Header>
            <Card.Img alt={project.name} variant="top" src={project.imageLink} />
            <Card.Body>
                <Card.Text style={{fontSize: 19}}>
                    {project.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Link target={"_blank"} href={project.githubLink}>Github Link</Card.Link>
                <Card.Link target={"_blank"} href={project.deployedLink}>Deployed Site</Card.Link>
            </Card.Footer>
        </Card>
    )
}

export default Project;