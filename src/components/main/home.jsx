import React from 'react';
import { ReactTyped } from "react-typed";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function home() {
    AOS.init();

  return (
    <section className="featured-box" id="home">
        <div data-aos="flip-up" className="featured-text">
            <div className="featured-text-card">
                <span>Yoness SALMI</span>
            </div>

            <div className="featured-name">
                 <ReactTyped className="typedText" strings={["I'm software developer"]} typeSpeed={40} />
            </div>

            <div className="featured-text-info">
                <p>Experienced frontend developer with a passion for creating visually stunning
                    and user-friendly websites.
                </p>
            </div>
            <div className="featured-text-btn">
                <button className="btn blue-btn">Hire Me</button>
                <button className="btn">Download CV <i className="uil uil-file-alt"></i></button>
            </div>
            <div className="social_icons">
                <div className="icon"><i className="uil uil-instagram"></i></div>
                <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
                <div className="icon"><i className="uil uil-phone"></i></div>
                <div className="icon"><i className="uil uil-github-alt"></i></div>
            </div>
        </div>

        <div  data-aos="flip-right" className="featured-image">
            <div className="image">
                <img src="./images/avatar.jpeg" alt="avatar"></img>
            </div>
        </div>
        <div className="scroll-icon-box">
            <a href="#about" className="scroll-btn">
                <i className="uil uil-mouse-alt"></i>
                <p>Scroll Down</p>
            </a>
        </div>
    </section>
  )
}
