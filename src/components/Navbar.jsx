import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo/LogoColor.png';
import '../styles/Navbar.css';

function Navbar() {
  const [menuObert, setMenuObert] = useState(false);

  const toggleMenu = () => {
    setMenuObert(!menuObert);
  };

  const tancaMenu = () => {
    setMenuObert(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo + nom */}
        <div className="navbar-logo">
          <Link to="/" onClick={tancaMenu}>
            <div className="logo-circle">
              <img src={logo} alt="Logo GEA Esquelles" className="logo-img" />
            </div>
            <span className="logo-text">GEA Esquelles</span>
          </Link>
        </div>

        {/* Botó hamburguesa */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Obre el menú">
          ☰
        </button>

        {/* Menú + botó (responsive) */}
        <div className="navbar-links-container">
          <ul className={`navbar-links ${menuObert ? 'active' : ''}`}>
            <li><Link to="/" onClick={tancaMenu}>Inici</Link></li>
            <li><Link to="/QuiSom" onClick={tancaMenu}>Qui som?</Link></li>
            <li><Link to="/Activitats" onClick={tancaMenu}>Activitats</Link></li>
            <li><Link to="/Rutes" onClick={tancaMenu}>Rutes</Link></li>
            <li><Link to="/Escalada" onClick={tancaMenu}>Escalada</Link></li>
            <li><Link to="/Galeria" onClick={tancaMenu}>Galeria</Link></li>
            <li><Link to="/Revista" onClick={tancaMenu}>Revista Batall</Link></li>

            {/* Botó només mòbil */}
            <li className="mobile-only">
              <Link to="/Soci" onClick={tancaMenu} className="btn-soci">
                Fes-te soci
              </Link>
            </li>
          </ul>

          {/* Botó només escriptori */}
          <Link to="/Soci" className="btn-soci desktop-only" onClick={tancaMenu}>
            Fes-te soci
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
