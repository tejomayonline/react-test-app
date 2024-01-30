import { ResturantCard } from "./ResturantCard";
import { resturants } from "../data";

export const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="rest-container">
        {resturants.map((resturant, index) => (
          <ResturantCard key={index} {...resturant} />
        ))}
      </div>
    </div>
  );
};
