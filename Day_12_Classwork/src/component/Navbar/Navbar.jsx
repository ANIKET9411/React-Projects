import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="navbar_left">
        <img
          src="https://th.bing.com/th/id/OIP.8hfFl9RjObJ3_DT3SGwiGgHaHa?w=612&h=612&rs=1&pid=ImgDetMain"
          alt="Logo"
        />
        {/* <span>FoodforEveryone</span> */}
      </a>
      <div className="navbar_middle">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        {/* <NavLink to="/quote" activeClassName="active">Quote</NavLink> */}
        <NavLink to="/restaurants" activeClassName="active">
          Restaurants
        </NavLink>
        <NavLink to="/foods" activeClassName="active">
          Foods
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
      <div className="navbar_right">
        <span>Get Started</span>
      </div>
    </div>
  );
}

export default Navbar;
