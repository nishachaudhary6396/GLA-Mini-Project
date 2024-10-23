import './Footer.css';
import footer_logo from '../../Assets/logo01.jpg';
import pintester_icon from '../../Assets/pintester_icon.png';
import instagram_icon from '../../Assets/instagram_icon.png';
import whatsapp_icon from '../../Assets/whatsapp_icon.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>EverTrend</p>
      </div>

      <ul className="footer-links">
        <li onClick={scrollToTop}>Company</li>
        <li onClick={scrollToTop}>Products</li>
        <li onClick={scrollToTop}>Offices</li>
        <li onClick={scrollToTop}>About</li>
        <li onClick={scrollToTop}>Contact</li>
      </ul>

      <div className="footer-social-icons">
        <div onClick={scrollToTop} className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} onClick={window.scrollTo(0, 0)} alt="" />
        </div>
        <div onClick={scrollToTop} className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>

      <div onClick={scrollToTop} className="footer-copyright">
        <hr />
        <p>&copy; 2024 EverTrend. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
