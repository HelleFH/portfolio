import './Footer.scss';
import Images from '../../assets/images';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => {

  return (
    <footer className="footer">
      {/* Contact Section */}
      <div className="footer__contact">
        <p>Contact me at:</p>
        <a href="mailto:hellefruergaardh@gmail.com">hellefruergaardh@gmail.com</a>
        <p>1434 Copenhagen, Denmark</p>

       <SocialLinks />
      </div>

      <div className="footer__logo-section">
        <img src={Images.FooterLogo} alt="Company Logo" />
        <p className="footer__copyright">&copy; 2025 <strong>Helle Fruergaard </strong >. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
