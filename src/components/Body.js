import { useState, useEffect } from "react";

import { ResturantCard } from "./ResturantCard";
import { resturants } from "../data";

const Body = () => {
  const [topRatedResturants, setTopRatedResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const timeout = fetchData();
    return () => clearTimeout(timeout);
  }, []);

  const fetchData = () => {
    return setTimeout(() => {
      setTopRatedResturants(resturants);
      setFilteredResturants(resturants);
    }, 300);
  };

  const filterBtnClickHandler = () => {
    setTopRatedResturants(
      resturants.filter((resturant) => resturant.rating > 3)
    );
  };

  return (
    <div className="body">
      <div className="search-bar">
        <div className="filter-btn">
          <button onClick={filterBtnClickHandler}> Find Yummy Foods </button>
        </div>
        <div>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchedResturants = topRatedResturants.filter(
                (resturant) => {
                  return resturant.name
                    .toLowerCase()
                    .includes(inputText.toLowerCase());
                }
              );
              setFilteredResturants(searchedResturants);
            }}
          >
            submit{" "}
          </button>
        </div>
      </div>

      <div className="rest-container">
        {filteredResturants.map((resturant, index) => (
          <ResturantCard key={index} {...resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
