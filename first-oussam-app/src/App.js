import './App.css';
import React from 'react';
import Home from './components/home';
import Features from './components/features'
import About from './components/about';
import Services from './components/services';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Features/>
        <Services/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}
export default App;
