import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Approuter from "./Router";

function App() {
  return (
    <>
      {/* <Approuter /> */}
      <ToastContainer />
      <Approuter />
    </>
  );
}

export default App;
