import React from 'react';
import Header from './components/Header.jsx';
import MapComponent from './components/MapComponent';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';

const App = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD1SDIcLh7yVjU2KLhqGnVZdJ1MK80kOuY">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <MapComponent />
      </Router>
    </LoadScript>
  );
};

export default App;
