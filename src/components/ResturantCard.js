//  image , name, ratings, cuisines
export const ResturantCard = ({ name, rating, cuisines, imgSrc }) => {
  return (
    <div className="rest-card">
      <img src={imgSrc} alt="resturant img" />
      <h3>{name}</h3>
      <h4>Rating : {rating}</h4>
      <h5>Cuisines : {cuisines.join()}</h5>
    </div>
  );
};
