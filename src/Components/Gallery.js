import { FeaturedInstall } from './Featured-install';
import { fireCollection } from '../FireIndex';

export const Gallery = () => {
  console.log(fireCollection);
  return (
    <div className="Gallery">
      <FeaturedInstall />
      fireCollection.map(fire)
    </div>
  );
};


  /* <ul className="Gallery-list">
  <li key={'1'}>
    <h3>Name of fire</h3>
    <img
      src="https://scontent.fbrs4-2.fna.fbcdn.net/v/t1.6435-9/191166307_4413242175353199_7019893890685168973_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=qd5xNx_ot_cAX-c4V4k&_nc_ht=scontent.fbrs4-2.fna&oh=00_AT8-nx49jT5bKHdDog1t_BHbCRfEf5FHHLSbDRXAmDUS4Q&oe=622EF5DB"
      alt=""
      style={{ width: '300px' }}
    ></img>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <Link to={'/gallery/:item_id'}>View Details</Link>
  </li>
  <li key={'2'}>
    <h3>Name of fire</h3>
    <img
      src="https://scontent.fbrs4-1.fna.fbcdn.net/v/t1.6435-9/162434283_4198684103475675_3681163490251894872_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=xZR-8EPpn5kAX_t1zat&_nc_ht=scontent.fbrs4-1.fna&oh=00_AT-YAnGMTV5p3ALyhaxTj6UmGmPTUjgcZl02WOx6gNtnuQ&oe=622DFB17"
      alt=""
      style={{ width: '300px' }}
    ></img>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <Link to={'/gallery/:item_id'}>View Details</Link>
  </li>
</ul> */

