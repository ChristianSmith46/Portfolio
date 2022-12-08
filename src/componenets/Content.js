import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function Content() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'Contact': {
                return <Contact />;
            }
            case 'Portfolio': {
                return <Portfolio />;
            }
            case 'Resume': {
                return <Resume />;
            }
            default: {
                return <AboutMe />;
            }
        }
    }

    const pageChangeHandler = (newPage) => setCurrentPage(newPage);

    return (
        <div>
            <NavBar currentPage={currentPage} pageChangeHandler={pageChangeHandler} />
            <main>
                {renderCurrentPage()}
            </main>
            <Footer />
        </div>
    );
}

export default Content;