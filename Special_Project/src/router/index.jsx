import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "../page/Food/Food";
import SpecifiedCategory from "../page/SpecifiedCategory/SpecifiedCategory";
import Receipedetail from "../page/Receipedetail/Receipedetail";
import SearchArea from "../component/SearchArea/SearchArea";
function Approuter() {
  return (
    <BrowserRouter>
      <SearchArea />
      <Routes>
        <Route path="/" element={<Food />}></Route>
        <Route path="/meal/:category" element={<SpecifiedCategory />}></Route>
        <Route path="/:id" element={<Receipedetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Approuter;
