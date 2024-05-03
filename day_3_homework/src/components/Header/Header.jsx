import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1>Family Wellness</h1>
      <p>MASSAGE THERAPY</p>
      <div className="nav">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SERVICES</a>
        <a href="#">FAQ</a>
        <a href="#">CONTACT</a>
      </div>
    </div>
  );
}
export default Header;
