import { Link } from 'react-router-dom';

export const FeaturedInstall = () => {
  return (
    <div className="Featured-install-tile">
      <h2>Featured Install</h2>
      <img
        src="https://scontent.fbrs4-1.fna.fbcdn.net/v/t1.6435-9/194032705_4413228855354531_5718628057022069790_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jFFIiCcBjg0AX_uJ-mY&_nc_ht=scontent.fbrs4-1.fna&oh=00_AT_JNSrOZc-bF4Y3qqdP1Xr6U0dZeShGXJu1aCKPMvm6Aw&oe=62307562"
        alt=""
        style={{ width: '500px' }}
      ></img>
      <h3>Name of fire</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Link to={'/gallery/:item_id'}>View Details</Link>
    </div>
  );
};
