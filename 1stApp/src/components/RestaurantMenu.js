import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For accessing route parameters
import Shimmer from "./Shimmer"; // Assume Shimmer is a loading placeholder component

const RestaurantMenu = () => {
  const { resId } = useParams(); // Get restaurant ID from the URL
  const [menuData, setMenuData] = useState(null); // To store menu data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  console.log(resId)

  // Fetch menu data when component mounts or resId changes
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/restaurantsMenu/${resId}`
      );
      const data = await response.json();
      setMenuData(data.data); // Assuming `data` is the key that holds menu info
    } catch (err) {
      setError("Failed to fetch menu");
    } finally {
      setLoading(false); // Once data is fetched, stop loading
    }
  };

  if (loading) return <Shimmer />; // Show Shimmer while loading
  if (error) return <div>{error}</div>; // Show error if fetching fails

  // Destructure restaurant info from the menu data
  const { name, cuisines, costForTwoMessage } =
    menuData?.cards?.[2]?.card?.card?.info || {};
  const { carousel } =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {carousel?.map((item) => (
          <li key={item?.dish?.info?.id}>
            {item?.dish?.info?.name} - ₹
            {(item?.dish?.info?.price || item?.dish?.info?.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
