import { Link } from "react-router-dom";
import facebookLogo from "../Images/FB-logo.png";
import instaLogo from "../Images/Insta-logo.png";

export const Footer = () => {
   return (
      // need to change to footer css
      <div className='Footer'>
         <h2>Y Fenni Fires and Flues</h2>
         <Link to={"/"}>Home</Link>
         <Link to={"/gallery"}>Gallery</Link>
         <Link to={"/services"}>Our Services</Link>
         <Link to={"/about"}>About</Link>
         <Link to={"/contact"}>Contact Us</Link>
      </div>
   );
};
