import "./App.css";

import { Header } from "./components/Header";

import { Footer } from "./components/Footer";
import { Body } from "./components/Body";

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
