import { useState, useEffect, useContext } from "react";

import { ResturantCard, resturantCardPromoted } from "./ResturantCard";
import { resturants } from "../data";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [topRatedResturants, setTopRatedResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    const timeout = fetchData();
    return () => clearTimeout(timeout);
  }, []);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const ResturantCardPromoted = resturantCardPromoted(ResturantCard);
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
    <div className="body flex flex-col">
      <div className="search-bar flex flex-row justify-around mt-4">
        <button
          className="filter-btn bg-cyan-400 p-1 text-white font-semibold"
          onClick={filterBtnClickHandler}
        >
          Find Yummy Foods
        </button>
        <div className="flex flex-row justify-around">
          <input
            className="border-cyan-500 border-2 p-1"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="text-cyan-500 font-semibold border-cyan-500 border-2 p-1"
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
            submit
          </button>
        </div>
        <input
          type="text"
          className="border border-solid border-black"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>

      <div className="rest-container flex flex-row flex-wrap mt-8 justify-center">
        {filteredResturants.map((resturant, index) =>
          resturant.promoted ? (
            <ResturantCardPromoted key={index} {...resturant} />
          ) : (
            <ResturantCard key={index} {...resturant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
