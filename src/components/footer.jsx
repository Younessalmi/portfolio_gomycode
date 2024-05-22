import React from 'react';
import '../css/style.css';

export default function Footer() {
    const FooterStyle =  {
        textDecoration: 'none',
    }
  return (
    <footer>
        <div className="top-footer">
            <p>Yoness SALMI .</p>
        </div>

        <div className="middle-footer">
            <ul className="footer-menu">
                <li className="footer_menu_list">
                    <a href="#home">Home</a>
                </li>
                <li className="footer_menu_list">
                    <a href="#about">About</a>
                </li>
                <li className="footer_menu_list">
                    <a href="#projects">Projects</a>
                </li>
                <li className="footer_menu_list">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>

        <div style={FooterStyle} className="footer-social-icons">
            <div className="icon"><i className="uil uil-instagram"></i></div>
            <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
            <div className="icon"><i className="uil uil-dribbble"></i></div>
            <div className="icon"><i className="uil uil-github-alt"></i></div>
        </div>
    </footer>
  )
}
