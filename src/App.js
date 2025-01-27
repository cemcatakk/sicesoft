import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Solutions />
              <ContactForm />
            </>
          } />
          <Route path="/kurumsal" element={<div>Kurumsal Sayfa</div>} />
          <Route path="/cozumler" element={<Solutions />} />
          <Route path="/iletisim" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 