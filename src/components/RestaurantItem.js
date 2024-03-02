import { useState } from "react";

function RestaurantItem({ title, food }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      className="panel border-gray-100 border-2 m-4 w-72"
      onClick={() => setIsActive((isItemActive) => !isItemActive)}
    >
      <h3 className="text-center cursor-pointer font-bold capitalize bg-gray-200">
        {title}
      </h3>
      {isActive && <p className="bg-cyan-300 py-32">{food}</p>}
    </section>
  );
}

export default RestaurantItem;
