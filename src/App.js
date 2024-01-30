import "./App.css";
import logo from "./logo.svg";
import placeholder from "./placeholder.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//  image , name, ratings, cuisines
const ResturantCard = ({ name, rating, cuisines, imgSrc }) => {
  return (
    <div className="rest-card">
      <img src={imgSrc} alt="resturant img" />
      <h3>{name}</h3>
      <h4>Rating : {rating}</h4>
      <h5>Cuisines : {cuisines.join()}</h5>
    </div>
  );
};

const resturants = [
  {
    name: "ABs",
    rating: 4,
    cuisines: ["Indian", "Chinese"],
    imgSrc: placeholder,
  },
  {
    name: "Berbeque",
    rating: 4,
    cuisines: ["Indian", "Chinese", "Continental"],
    imgSrc: placeholder,
  },
  {
    name: "Dominos",
    rating: 4,
    cuisines: ["Indian", "Italian"],
    imgSrc: placeholder,
  },
  {
    name: "Pizzahut",
    rating: 4,
    cuisines: ["Indian", "Chinese"],
    imgSrc: placeholder,
  },
  {
    name: "ABs",
    rating: 4,
    cuisines: ["Indian", "Chinese"],
    imgSrc: placeholder,
  },
  {
    name: "Berbeque",
    rating: 4,
    cuisines: ["Indian", "Chinese", "Continental"],
    imgSrc: placeholder,
  },
  {
    name: "Dominos",
    rating: 4,
    cuisines: ["Indian", "Italian"],
    imgSrc: placeholder,
  },
  {
    name: "Pizzahut",
    rating: 4,
    cuisines: ["Indian", "Chinese"],
    imgSrc: placeholder,
  },
  {
    name: "ABs",
    rating: 4,
    cuisines: ["Indian", "Chinese"],
    imgSrc: placeholder,
  },
  {
    name: "Berbeque",
    rating: 4,
    cuisines: ["Indian", "Chinese", "Continental"],
    imgSrc: placeholder,
  },
  {
    name: "Dominos",
    rating: 4,
    cuisines: ["Indian", "Italian"],
    imgSrc: placeholder,
  },
  {
    name: "Pizzahut",
    rating: 4,
    cuisines: ["Indian", "Chinese"],
    imgSrc: placeholder,
  },
];

const Body = () => {
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

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>Copyright @</li>
        <li>Legal</li>
        <li>Contact US</li>
      </ul>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;

/*
//  Header
      - logo
      - nav
          navitem

// Body
    - search
      - Search Bar
      - Button
      - resturant container
        - resturant cards
            - Name
            - Cuisine
            - ratings

// Footer
    - Copyright
    - links
    - Address
    - Contact
*/
