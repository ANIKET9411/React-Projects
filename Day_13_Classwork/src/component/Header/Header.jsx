// import { Link } from 'react-router-dom';
import "./Header.css"; // Optional: for styling the component

const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>TextUtils</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li> About Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
