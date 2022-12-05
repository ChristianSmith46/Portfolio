

function NavBar({pageChangeHandler, currentPage}) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                href="#aboutme"
                onClick={() => pageChangeHandler('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                >
                AboutMe
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#portfolio"
                onClick={() => pageChangeHandler('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#contact"
                onClick={() => pageChangeHandler('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#resume"
                onClick={() => pageChangeHandler('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                Resume
                </a>
            </li>
        </ul>
    );
}

export default NavBar;