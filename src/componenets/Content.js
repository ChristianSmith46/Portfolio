import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

function Content() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderCurrentPage = () => {
        switch(currentPage){
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
            <NavBar pageChangeHandler={pageChangeHandler} />
            {renderCurrentPage()}
            <Footer />
        </div>
    );
}

export default Content;