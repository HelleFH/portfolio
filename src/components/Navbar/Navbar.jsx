import { useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Images from '../../assets/images';
import SocialLinks from '../SocialLinks/SocialLinks'
import { Menu, X } from 'lucide-react';
import SideMenu from '../SideMenu/SideMenu.tsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection logic to change navbar style based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scroll state if scroll is more than 50px
      setScrolled(currentScrollY > 50);

      // Only hide if scrolled more than 7vh from top
      if (currentScrollY > lastScrollY && !menuOpen && currentScrollY > window.innerHeight * 0.07) {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        const timeoutId = setTimeout(() => {
          setIsHidden(true);
        }, 2000);

        setScrollTimeout(timeoutId);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout, menuOpen]);

  return (
  <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isHidden && !menuOpen ? 'hidden' : ''}`}>

      <div className="navbar-content">

        <div>
          <Link className="navbar-logo-container" to="/">
            <img
              className="navbar-logo"
              src={scrolled ? Images.FooterLogo : Images.FooterLogo}
              alt="Logo"
            />

          </Link>

        </div>


        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {/* Home Link visible only in mobile view */}
          <li className="mobile-home-link">
            <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <div className="divider"></div>

          {/* About Me Link */}
          <li>
            <Link to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>About Me</Link>
          </li>

          <li>
            <SocialLinks />
          </li>
       
          
           <div className="divider"></div>

        </ul>
               <SideMenu
            items={[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ]}
             open={menuOpen}
        setOpen={setMenuOpen}
          /> 
      </div>
    </nav>
  );
};

export default Navbar;
