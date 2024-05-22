import React, { useState } from 'react';
import '../css/style.css';

export default function Header() {
    const [activeLink, setActiveLink] = useState('home');

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    return (
        <nav id="header">
            <div className="nav-logo">
                <p className="nav-name">Yoness</p>
            </div>

            <div className="nav-menu" id="myNavMenu">
                <ul className="nav_menu_list">
                    <li className="nav_list">
                        <a
                            href="#home"
                            className={`nav-link ${activeLink === 'home' ? 'active-link' : ''}`}
                            onClick={() => handleSetActiveLink('home')}
                        >
                            Home
                        </a>
                        <div className="circle"></div>
                    </li>

                    <li className="nav_list">
                        <a
                            href="#about"
                            className={`nav-link ${activeLink === 'about' ? 'active-link' : ''}`}
                            onClick={() => handleSetActiveLink('about')}
                        >
                            About
                        </a>
                        <div className="circle"></div>
                    </li>

                    <li className="nav_list">
                        <a
                            href="#projects"
                            className={`nav-link ${activeLink === 'projects' ? 'active-link' : ''}`}
                            onClick={() => handleSetActiveLink('projects')}
                        >
                            Projects
                        </a>
                        <div className="circle"></div>
                    </li>

                    <li className="nav_list">
                        <a
                            href="#contact"
                            className={`nav-link ${activeLink === 'contact' ? 'active-link' : ''}`}
                            onClick={() => handleSetActiveLink('contact')}
                        >
                            Contact
                        </a>
                        <div className="circle"></div>
                    </li>
                </ul>
            </div>

            <div className="nav-button">
                <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
            </div>

            <div className="nav-menu-btn">
                <i className="uil uil-bars"></i>
            </div>
        </nav>
    );
}
