import { Link } from "react-router-dom";
import facebookLogo from "../Images/FB-logo.png";
import instaLogo from "../Images/Insta-logo.png";

export const Footer = () => {
   return (
      // need to change to footer css
      <div className='Footer'>
         <h2>Y Fenni Fires and Flues</h2>
         <Link id='Home-link' to={"/"}>
            Home
         </Link>
         <Link id='Gallery-link' to={"/gallery"}>
            Gallery
         </Link>
         <Link id='Services-link' to={"/services"}>
            Our Services
         </Link>
         <Link id='About-link' to={"/about"}>
            About
         </Link>
         <Link id='Contact-link' to={"/contact"}>
            Contact Us
         </Link>
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
   );
};
