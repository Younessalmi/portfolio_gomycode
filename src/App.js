import React from 'react'
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

export default function App() {
  return (
    <div className='container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}