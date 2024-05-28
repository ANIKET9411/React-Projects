import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
import Welcome from "../component/Welcome/Welcome";
import Start from "../Context/index";

function Approuter() {
  return (
    <Start>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
        </Routes>
      </BrowserRouter>
    </Start>
  );
}
export default Approuter;
