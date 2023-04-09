import { Link } from "react-router-dom";
import facebookLogo from "../Images/FB-logo.png";
import instaLogo from "../Images/Insta-logo.png";

export const Header = () => {
   return (
      <div className='HeaderContainer'>
         <div className='HeaderTop'>
            <h1>Y Fenni Fires & Flues</h1>
            {/* <a
            target={"_blank"}
            href={"https://www.facebook.com/yfennifiresandflues/"}
            rel='noreferrer'
            >
            <img
            src={facebookLogo}
            alt='Facebook logo'
            style={{ width: "30px" }}
            ></img>
            </a>
            <span> </span>
            <a
            target={"_blank"}
            href={"https://www.instagram.com/y_fenni_fires_and_flues/"}
            rel='noreferrer'
            >
            <img
            src={instaLogo}
            alt='Insta logo'
            style={{ width: "30px" }}
            ></img>
         </a> */}
         </div>
         <div className='HeaderBottom'>
            <svg
               fill='none'
               stroke='currentColor'
               strokeWidth={1}
               viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'
               aria-hidden='true'
            >
               <path
                  strokeLinecap='square'
                  strokeLinejoin='sqaure'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
               />
            </svg>
         </div>
      </div>
   );
};

/* <Link id="Home-link" to={'/'}>
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
</Link> */
