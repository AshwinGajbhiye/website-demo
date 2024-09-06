import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Content
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home'; // Home component will include Services, Info, and Projects
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className='h-full w-[100%] flex flex-col'>
        <Header />
        <hr className="border-t border-white" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
