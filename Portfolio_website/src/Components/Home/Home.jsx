import Social_icons from "../Social_icons/Social_icons";
import profile from "../../assets/updated_profile_image.jpg";
import "./Home.css";
function Home() {
  return (
    <div id="home" className="home">
      <img src={profile} width="250" height="250"></img>
      <h1>Aniket Jauhri</h1>
      <p>Frontend Developer</p>
      <Social_icons />
    </div>
  );
}
export default Home;
