import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import DetailExercise from "../Components/DetailExercise/DetailExercise";
import Header from "../Components/Header/Header";
function Approuter() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/exercise/:id" element={<DetailExercise />}></Route>
          {/* <Route path="/exercise/:" element={<DetailExercise />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Approuter;
