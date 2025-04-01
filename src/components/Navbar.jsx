import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(() => window.innerWidth > 960);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const showButton = () => {
      setButton(window.innerWidth > 960);
    };

    window.addEventListener('resize', showButton);

    showButton();

    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FitBro <i className="fa-solid fa-dumbbell fa-xs"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-links" onClick={closeMobileMenu}>
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
