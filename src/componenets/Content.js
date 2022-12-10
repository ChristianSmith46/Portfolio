import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function Content() {
    const [currentPage, setCurrentPage] = useState('');

    const pageChangeHandler = (newPage) => setCurrentPage(newPage);

    return (
        <Router>
            <div>
                <NavBar currentPage={currentPage} pageChangeHandler={pageChangeHandler} />
                <main>
                    <Routes>
                        <Route
                            path="/about"
                            element={<AboutMe />}
                        />
                        <Route
                            path="/portfolio"
                            element={<Portfolio />}
                        />
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />
                        <Route
                            path="/resume"
                            element={<Resume />}
                        />
                        <Route
                            path="*"
                            element={<AboutMe />}
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default Content;