import { Navbar, Nav } from "react-bootstrap";

function NavBar({ pageChangeHandler, currentPage }) {

    return (
        <Navbar collapseOnSelect expand="md" variant="dark" sticky="top">
            <Navbar.Brand>Christian Smith</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link onClick={() => pageChangeHandler('AboutMe')} className={currentPage === 'AboutMe' ? 'active' : ''}>About</Nav.Link>
                    <Nav.Link onClick={() => pageChangeHandler('Portfolio')} className={currentPage === 'Portfolio' ? 'active' : ''}>Portfolio</Nav.Link>
                    <Nav.Link onClick={() => pageChangeHandler('Contact')} className={currentPage === 'Contact' ? 'active' : ''}>Contact</Nav.Link>
                    <Nav.Link onClick={() => pageChangeHandler('Resume')} className={currentPage === 'Resume' ? 'active' : ''}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;