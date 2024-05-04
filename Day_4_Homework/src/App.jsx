import "./App.css";
import Profile from "./components/Profile/Profile";
import Work from "./components/Work/Work";
import Skill from "./components/Skill/Skill";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Profile />
      <Work />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
