import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function about() {
    AOS.init();
  return (
    <section className="section" id="about">
        <div className="top-header">
            <h1>About Me</h1>
        </div>
        <div className="row">
        
            <div data-aos="fade-right" className="col">
                <div className="about-info">
                    <h3>My introduction</h3>
                    <p>I am a passionate web developer with expertise in frontend technologies like HTML, CSS, Bootstrap, JavaScript, and React. On the backend, I specialize in PHP and Laravel, creating robust server-side applications. My database management skills include MySQL and PostgreSQL for efficient data handling. Explore my portfolio to see how I build seamless and dynamic web applications.
                    </p>

                        <div className="about-btn">
                            <button className="btn">Download CV <i className="uil uil-import"></i></button>
                        </div>
                </div>
            </div>

            <div data-aos="fade-left" className="col">
                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Frontend</h3>
                    </div>
                    <div className="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>JavaScript</span>
                        <span>React</span>
                    </div>
                </div>
                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Backend</h3>
                    </div>
                    <div className="skills-list">
                        <span>PHP</span>
                        <span>Laravel</span>
                    </div>
                </div>
                <div className="skills-box">
                    <div className="skills-header">
                        <h3>Database</h3>
                    </div>
                    <div className="skills-list">
                        <span>MySQL</span>
                        <span>PostgreSQL</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
