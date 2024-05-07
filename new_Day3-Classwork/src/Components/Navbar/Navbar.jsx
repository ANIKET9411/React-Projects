import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <a href="" className="navbar_left">
        <img src="https://th.bing.com/th/id/OIP.8hfFl9RjObJ3_DT3SGwiGgHaHa?w=612&h=612&rs=1&pid=ImgDetMain" />
        {/* <span>FoodforEveryone</span> */}
      </a>
      <div className="navbar_middle">
        <a href="">Home</a>
        <a href="">Quote</a>
        <a href="">Restaurants</a>
        <a href="">Foods</a>
        <a href="">Contact</a>
      </div>
      <div className="navbar_right">
        <span>Get Started</span>
      </div>
    </div>
  );
}
export default Navbar;
