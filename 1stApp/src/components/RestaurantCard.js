import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 hover:shadow-2xl">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <h4 className=" text-sm py-2">{cuisines.join(", ")}</h4>
      <h4 className=" text-sm">{avgRating} stars</h4>
      <h4 className=" text-sm">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard ==> RestaurantCardPromoted

// const withPromotedLabel = (RestaurantCard) => {
//   return (props)=>{
//     return (
//       <div>
//         <label className="absoltue bg-black text-white n-2 p-2 rounded-lg">Promoted</label>
//         <RestaurantCard {...props}/>
//       </div>
//     )
//   }
// }
export default RestaurantCard;
