import '../styles/Footer.css';

import facebookIcon from '../assets/Icones/icons8-facebook-24.png';
import instagramIcon from '../assets/Icones/icons8-instagram-24.png';
import whatsappIcon from '../assets/Icones/icons8-whatsapp-24.png';

function Footer() {
  return (
    <footer className="footer">
      <p>© 1969 GEA Esquelles</p>

      <div className="xarxes">
        <a href="https://www.facebook.com/gea.esquelles/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/geaesquelles/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://chat.whatsapp.com/C2CVFV7b7kPDESHF2xgxTs" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
