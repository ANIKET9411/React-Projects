import logo from "../../assets/logo.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} alt="" />
      <div className="search_area">
        <input type="text" placeholder="Search for Products" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
        <p>Customer Service</p>
        <h4>+012 345 6789</h4>
      </div>
    </div>
  );
}
export default Navbar;
