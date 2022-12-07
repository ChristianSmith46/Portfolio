

function NavBar({ pageChangeHandler, currentPage }) {

    return (
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand mb-0 h1">Christian Smith</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
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

            </div>
        </nav>
    );
}

export default NavBar;