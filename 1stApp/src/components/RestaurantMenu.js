import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For accessing route parameters
import Shimmer from "./Shimmer"; // Assume Shimmer is a loading placeholder component
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (menuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards?.[2]?.card?.card?.info || {};

  const { carousel } =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  const categories =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (C) =>
        C.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card?.card?.title}
          data={category.card?.card}
          showItems={index === showIndex && true}
          setShowIndex = {()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
