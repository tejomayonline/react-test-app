import { Outlet } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import { Header } from "./components/Header";

import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";

const App = () => {
  const [userName, setUserName] = useState("Tejomay");
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
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
