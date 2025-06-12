import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DrawingGallery from './components/DrawingGallery';
import Brand from './components/Brand';
import APV from './components/APV';
import Mood from './components/Mood';
import FloridaMan from './components/FloridaMan';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/drawing-gallery" element={<DrawingGallery />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/APV" element={<APV />} />
          <Route path="/Mood" element={<Mood />} />
          <Route path="/floridaman" element={<FloridaMan />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
