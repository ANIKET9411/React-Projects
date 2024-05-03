import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="nav_left">
        <div className="nav_left_left">
          <img
            src="https://64.media.tumblr.com/6c20f5206af7ad37541b8ae0e74e232c/tumblr_pwmv0bjG2U1vewxszo1_1280.jpg"
            alt=""
          />
          <h3>Hootsuite</h3>
        </div>
        <div className="nav_left_right">
          <a href="">Platform</a>
          <a href="">Plans</a>
          <a href="">Enterprise</a>
          <a href="">Resources</a>
          <a href="">Education</a>
        </div>
      </div>
      <div className="nav_right">
        <button>Contact Us</button>
        <button>Log in</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
export default Navbar;
