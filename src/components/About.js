import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <section className="about">
      <h1>about</h1>
      <h2>Learning Routers</h2>
      <h3>User: {loggedInUser}</h3>
    </section>
  );
};

export default About;
