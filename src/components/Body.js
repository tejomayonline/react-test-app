import { useState } from "react";

import { ResturantCard } from "./ResturantCard";
import { resturants } from "../data";

const Body = () => {
  const [topRatedResturants, setTopRatedResturants] = useState(resturants);

  function filterBtnClickHandler() {
    setTopRatedResturants(
      resturants.filter((resturant) => resturant.rating > 3)
    );
  }

  return (
    <div className="body">
      <div className="filter-btn">
        <button onClick={filterBtnClickHandler}> Find Yummy Foods </button>
      </div>
      <div className="rest-container">
        {topRatedResturants.map((resturant, index) => (
          <ResturantCard key={index} {...resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
