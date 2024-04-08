import { NavLink } from "react-router-dom";
import "./nav.scss";

const NavBar = (props) => {
  return (
    <div className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default NavBar;
