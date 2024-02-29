import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {}, []);

  return (
    <div className="menu">
      <h1>Resturant Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Food1</li>
        <li>Food2</li>
        <li>Food3</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
