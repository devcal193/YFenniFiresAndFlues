import { FeaturedInstall } from "./Featured-install";
import { fireCollection } from "../FireIndex";
import { Link } from "react-router-dom";

export const Gallery = () => {
   return (
      <div className='Gallery'>
         <FeaturedInstall page='gallery' />
         <ul>
            {fireCollection.map((fire) => {
               if (fire.featured === false) {
                  return (
                     <li key={fire.item_id}>
                        <h3>{fire.make_model}</h3>
                        <p>{fire.date}</p>
                        <img
                           src={fire.HeaderImageURL}
                           alt=''
                           width={window.innerWidth}
                        ></img>
                        <br />
                        <Link to={`/gallery/:${fire.item_id}`}>
                           View Details
                        </Link>
                     </li>
                  );
               }
            })}
         </ul>
      </div>
   );
};
