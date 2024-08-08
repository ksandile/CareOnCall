import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header = () => {
  return (
    <header className="mobile-header">
      <div className="icons">
        <Link to="/"><i className="fas fa-home"></i></Link>
        <Link to="/about"><i className="fas fa-info-circle"></i></Link>
        <Link to="/contact"><i className="fas fa-envelope"></i></Link>
      </div>
      <div className="buttons">
        <Link to="/about"><button>About</button></Link>
        <Link to="/member"><button>Become a Member</button></Link>
        <Link to="/signin"><button>Sign In</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
    </header>
  );
};

export default Header;
