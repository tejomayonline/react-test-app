//  image , name, ratings, cuisines
export const ResturantCard = ({ name, rating, cuisines, imgSrc }) => {
  return (
    <div className="rest-card flex flex-col">
      <img src={imgSrc} alt="resturant img" className="w-80" />
      <h3 className="font-bold mx-6">{name}</h3>
      <h4 className="text-cyan-500 mx-6">Rating : {rating}</h4>
      <h5 className="font-light mx-6 italic">Cuisines : {cuisines.join()}</h5>
    </div>
  );
};
