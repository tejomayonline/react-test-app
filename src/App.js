import { Outlet } from "react-router-dom";

import "./App.css";

import { Header } from "./components/Header";

import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
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
