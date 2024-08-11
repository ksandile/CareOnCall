import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import MapComponent from './components/MapComponent';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './components/Login';
import Register from './components/Register'; // Example registration component
import AuthProvider from './components/AuthProvider'; // Example auth provider
import { GoogleMapsProvider } from './components/GoogleMapsProvider'; // Adjust the import path as needed

const center = { lat: -3.745, lng: -38.523 }; // Adjust as needed

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <GoogleMapsProvider>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Add other routes as needed */}
            </Routes>
            <MapComponent center={center} />
          </div>
        </GoogleMapsProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;
