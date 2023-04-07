import { Link } from "react-router-dom";
import facebookLogo from "../Images/FB-logo.png";
import instaLogo from "../Images/Insta-logo.png";

export const Header = () => {
   return (
      <div className='Header'>
         <svg
            clipRule='evenodd'
            fillRule='evenodd'
            width='24'
            strokeLinejoin='round'
            strokeMiterlimit='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
         >
            <path
               d='m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z'
               fillRule='nonzero'
            />
         </svg>
         <a
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
         </a>
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
