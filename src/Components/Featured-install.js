import { Link } from "react-router-dom";
import { fireCollection } from "../FireIndex";

export const FeaturedInstall = ({ page }) => {
   return page === "home" ? (
      <div className='FeaturedHome'>
         <h2>Featured Install</h2>
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
                        className='Photo'
                     ></img>
                  </div>
               );
            }
            return <></>;
         })}
         <Link className='FeaturedHomeLink' to={"/gallery"}>
            View Gallery
         </Link>
      </div>
   ) : (
      <div className='FeaturedGallery'>
         <h2>Featured Install</h2>
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
                        className='Photo'
                     ></img>
                     <Link
                        className='FeaturedGalleryLink'
                        to={`/gallery/${fire.item_id}`}
                     >
                        View Details
                     </Link>
                  </div>
               );
            }
            return <></>;
         })}
      </div>
   );
};
