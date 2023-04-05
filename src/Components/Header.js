import { Link } from 'react-router-dom';
import facebookLogo from '../Images/FB-logo.png';
import instaLogo from '../Images/Insta-logo.png';

export const Header = () => {
  return (
    <div className="Header">
      <h1>Y-Fenni Fires and Flues</h1>
      <div className="NavLinks">
        <Link id="Home-link" to={'/'}>
          Home
        </Link>
        <span> | </span>
        <Link id="Gallery-link" to={'/gallery'}>
          Gallery
        </Link>
        <span> | </span>
        <Link id="Services-link" to={'/services'}>
          Our Services
        </Link>
        <span> | </span>
        <Link id="About-link" to={'/about'}>
          About
        </Link>
        <span> | </span>
        <Link id="Contact-link" to={'/contact'}>
          Contact Us
        </Link>
        <a
          target={'_blank'}
          href={'https://www.facebook.com/yfennifiresandflues/'}
          rel="noreferrer"
        >
          <img
            src={facebookLogo}
            alt="Facebook logo"
            style={{ width: '30px' }}
          ></img>
        </a>
        <span> </span>
        <a
          target={'_blank'}
          href={'https://www.instagram.com/y_fenni_fires_and_flues/'}
          rel="noreferrer"
        >
          <img src={instaLogo} alt="Insta logo" style={{ width: '30px' }}></img>
        </a>
      </div>
    </div>
  );
};
