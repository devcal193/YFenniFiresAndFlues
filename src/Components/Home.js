import { Link } from "react-router-dom";
import hetasLogo from "../Images/Hetas-logo.png";
import { FeaturedInstall } from "./Featured-install";

export const Home = () => {
   return (
      <div className='Home'>
         <div className='Tagline'>
            <div className='OverlayBanner'>
               {/* <h1>Y Fenni Fires & Flues</h1> */}
               <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
               </h3>
               <Link className='OverlayBannerLink' to={"/services"}>
                  Our Services
               </Link>
            </div>
         </div>

         <div className='HomeContainer'>
            <div className='Intro'>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
               </p>
            </div>

            <div className='Hetas'>
               <img
                  src={hetasLogo}
                  alt='Hetas logo'
                  style={{ width: "200px" }}
               ></img>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
               </p>
            </div>
            <FeaturedInstall page='home' />
            <div className='TestimonialHome'>
               <div>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
               </div>
            </div>
            {/* <div className='Cta-home'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link id='Contact-link-home' to={"/contact"}>
            Contact Us
            </Link>
         </div> */}
         </div>
      </div>
   );
};
