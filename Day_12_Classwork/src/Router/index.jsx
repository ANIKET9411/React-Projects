import Navbar from "../component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../page/Homepage/Homepage";
import Quotepage from "../page/Quotepage/Quotepage";
import Restaurantpage from "../page/Reataurantpage/Restaurantpage";
function Approuter() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Quote" element={<Quotepage />}></Route>
          <Route path="/Restaurant" element={<Restaurantpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Approuter;
