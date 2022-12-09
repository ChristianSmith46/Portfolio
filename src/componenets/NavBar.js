import { Navbar, Nav } from "react-bootstrap";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function NavBar({ pageChangeHandler, currentPage }) {

    const [expanded, setExpanded] = useState(false)

    return (
        <Navbar expanded={expanded} expand="md" variant="dark" sticky="top">
            <Navbar.Brand>Christian Smith</Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav onClick={() => setExpanded(false)}>
                    <Nav.Link as={Link} to="/about" onClick={() => pageChangeHandler('AboutMe')} className={currentPage === 'AboutMe' ? 'active' : ''}>About</Nav.Link>
                    <Nav.Link as={Link} to="/portfolio" onClick={() => pageChangeHandler('Portfolio')} className={currentPage === 'Portfolio' ? 'active' : ''}>Portfolio</Nav.Link>
                    <Nav.Link as={Link} to="/contact" onClick={() => pageChangeHandler('Contact')} className={currentPage === 'Contact' ? 'active' : ''}>Contact</Nav.Link>
                    <Nav.Link as={Link} to="/resume" onClick={() => pageChangeHandler('Resume')} className={currentPage === 'Resume' ? 'active' : ''}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;