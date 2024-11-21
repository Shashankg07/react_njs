import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

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

  return resInfo;
};

export default useRestaurantMenu;
