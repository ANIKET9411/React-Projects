import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src="src/assets/logo.png" alt="" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
        consequuntur amet culpa cum itaque neque.
      </p>
      <div className="footer-navbar">
        <a href="">About</a>
        <a href="">Careers</a>
        <a href="">History</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <a href="">Blog</a>
      </div>
      <div className="socio_icon">
        <a href="">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
export default Footer;
