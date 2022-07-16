import logo from './assets/images/logo.png';
import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import '../src/assets/css/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
 

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
       
        <div className="menu">
            <nav>
            <ul className="navigation">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
