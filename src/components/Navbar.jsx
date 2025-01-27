import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/sicesoft-logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div>
          <Link to="/">
            <img className="logo" src={Logo} alt="SiceSoft Logo" style={{height: '32px'}} />
          </Link>
        </div>
        
        <div className="nav-links">
          <Link to="/kurumsal" className="nav-link">
            Kurumsal
          </Link>
          <Link to="/cozumler" className="nav-link">
            Çözümler
          </Link>
          <Link to="/iletisim" className="nav-link">
            İletişim
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;