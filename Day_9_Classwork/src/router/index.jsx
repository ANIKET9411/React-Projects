import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Detail_exercise from "../Pages/Detail_exercise/Detail_exercise";
import Header from "../Components/Header/Header";
function Approuter() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/exercise/:id" element={<Detail_exercise />}></Route>
          {/* <Route path="/exercise/:" element={<DetailExercise />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Approuter;
