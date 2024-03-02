import { Link } from "react-router-dom";

//  image , name, ratings, cuisines
export const ResturantCard = ({ name, rating, cuisines, imgSrc }) => {
  return (
    <Link to={"/restaurants/" + name.toLowerCase()}>
      <div className="rest-card flex flex-col">
        <img src={imgSrc} alt="resturant img" className="w-80" />
        <h3 className="font-bold mx-6">{name}</h3>
        <h4 className="text-cyan-500 mx-6">Rating : {rating}</h4>
        <h5 className="font-light mx-6 italic">Cuisines : {cuisines.join()}</h5>
      </div>
    </Link>
  );
};

export const resturantCardPromoted = (ResturantCard) => {
  return (props) => {
    return (
      <div className="promoted-card">
        <label className="absolute text-white bg-black p-2 m-2 rounded">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

// position: absolute;
//     color: white;
//     background: black;
//     padding: 2px;
//     border-radius: 10%;
