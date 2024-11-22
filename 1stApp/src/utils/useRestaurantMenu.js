import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
      const response = await fetch(
        `http://localhost:3001/api/restaurantsMenu/${resId}`
      );
      const data = await response.json();
      setResInfo(data.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
