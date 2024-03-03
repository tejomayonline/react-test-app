import RestaurantItem from "./RestaurantItem";
import { RESTAURANT_ITEMS } from "../utils/constant";
import { useState } from "react";

const RestaurantMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="menu h-72">
      <h1 className="font-bold text-center m-4 p-2">Restaurant Name</h1>
      <h2 className="font-semibold text-center m-2 p-1">Menu</h2>
      <ul className="flex flex-col items-center">
        {RESTAURANT_ITEMS.map((restaurant, index) => (
          <RestaurantItem
            key={restaurant.title}
            {...restaurant}
            setActiveIndex={() => {
              index === activeIndex
                ? setActiveIndex(null)
                : setActiveIndex(index);
            }}
            isActive={index === activeIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
