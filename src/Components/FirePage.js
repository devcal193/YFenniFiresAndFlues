import { Link, useParams } from "react-router-dom";
import { fireCollection } from "../FireIndex";

export const FirePage = () => {
   const { item_id } = useParams();
   const fire = fireCollection.filter((fire) => fire.item_id == item_id)[0];

   return (
      <div className='Fire'>
         <h2>{fire.make_model}</h2>
         <p>{fire.description}</p>
         {/* <img src={fire.HeaderImageURL} alt=""/> */}
         {fire.imageCollectionURLs.map((image, i) => {
            return (
               <div key={i}>
                  <img src={image.URL} alt='' />
                  <p>{image.description}</p>
               </div>
            );
         })}
      </div>
   );
};
