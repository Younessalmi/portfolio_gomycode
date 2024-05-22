import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function contact() {
    AOS.init();
  return (
    <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="section" id="contact">
        <div className="top-header">
            <h1>Get in touch</h1>
            <span>Do you have a project in your mind, contact me here</span>
        </div>
        <div className="row">
            <div className="col">
                <div className="contact-info">
                    <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
                    <p><i className="uil uil-envelope"></i> Email: younessalmi193@gmail.com</p>
                    <p><i className="uil uil-phone"></i> Tel: +212 06 66 62 66 61</p>
                </div>
            </div>
            <div className="col">
                <div className="form-control">
                    <div className="form-inputs">
                        <input type="text" className="input-field" placeholder="Name"></input>
                        <input type="text" className="input-field" placeholder="Email"></input>
                    </div>
                    <div className="text-area">
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="form-button">
                        <button className="btn">Send <i className="uil uil-message"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
