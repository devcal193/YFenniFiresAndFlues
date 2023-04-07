import { Link } from "react-router-dom";
import { fireCollection } from "../FireIndex";

export const FeaturedInstall = ({ page }) => {
   return page == "home" ? (
      <div className='FeaturedHome'>
         <h2>Featured Fit</h2>
         {fireCollection.map((fire) => {
            if (fire.featured === true) {
               return (
                  <div key={fire.item_id}>
                     <h3>{fire.make_model}</h3>
                     <p>{fire.description}</p>
                     <img
                        src={fire.HeaderImageURL}
                        alt=''
                        width={window.innerWidth}
                     ></img>
                  </div>
               );
            }
         })}
         <Link className='FeaturedHomeLink' to={"/gallery"}>
            View Gallery
         </Link>
      </div>
   ) : (
      <div className='FeaturedGallery'>
         <Link to={"/gallery/:item_id"}>View Details</Link>
      </div>
   );
};
