import "./App.css";
import Main from "./components/main/Main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Main />
      <ToastContainer />
    </>
  );
}

export default App;
