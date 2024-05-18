import React from 'react';
import '../css/style.css';
import Home from './main/home'
import About from './main/about';
import Projects from './main/projects'
import Contact from './main/contact'

export default function Main() {
  return (
    <main className="wrapper">
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </main>
  )
}
