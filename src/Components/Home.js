import { Link } from 'react-router-dom';
import hetasLogo from '../Images/Hetas-logo.png';

export const Home = () => {
  return (
    <div className="Home">
      <div className="Tagline-img">
        <img
          src="https://scontent.fbrs4-2.fna.fbcdn.net/v/t1.6435-9/68967815_2668164006527700_65341746950701056_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=WBhRrHQruI0AX-KMLea&_nc_ht=scontent.fbrs4-2.fna&oh=00_AT9SAz7JXpcSQp-_KTLJqgSaHrLklqys59M4ae4a30dOSQ&oe=622E3DF2"
          style={{ width: '400px' }}
          alt=""
        ></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link id="Services-link-home" to={'/services'}>
          Our Services
        </Link>
      </div>
      <div className="Hetas-section">
        <img src={hetasLogo} alt="Hetas logo" style={{ width: '200px' }}></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="Featured">
        <img
          src="https://scontent.fbrs4-1.fna.fbcdn.net/v/t1.6435-9/194032705_4413228855354531_5718628057022069790_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jFFIiCcBjg0AX_uJ-mY&_nc_ht=scontent.fbrs4-1.fna&oh=00_AT_JNSrOZc-bF4Y3qqdP1Xr6U0dZeShGXJu1aCKPMvm6Aw&oe=62307562"
          alt=""
          style={{ width: '500px' }}
        ></img>
        <div className="Featured-overlay">
          <h2>Featured Install</h2>
          <Link id="Gallery-link-home" to={'/gallery'}>
            View Gallery
          </Link>
          <p>View our gallery and testimonials</p>
        </div>
      </div>
      <div className="Reviews-home"></div>
      <div className="Cta-home">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link id="Contact-link-home" to={'/contact'}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};
