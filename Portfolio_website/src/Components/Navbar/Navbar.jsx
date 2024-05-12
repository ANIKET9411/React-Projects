import "./Navbar.css";
function Navbar() {
  // window.addEventListener('scroll',()=>{
  //     if(window.scrollY>40)
  //     {

  //     }
  //   });
  return (
    <div className="nav">
      <div className="nav_left">Aniket Jauhri</div>
      <div className="nav_right menu menu-1">
        <a className="homes" href="#home">
          HOME
        </a>
        <a href="#about">ABOUT</a>
        <a href="#my_work">MY WORK</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
}
export default Navbar;
