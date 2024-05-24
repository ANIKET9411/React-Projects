import { createContext, useState } from "react";
import Home from "../component/Home/Home";
export const Context = createContext();
function Top() {
  //   let val = JSON.parse(localStorage.getItem("List"));
  const [expenselist, setExpenselist] = useState([]);
  return (
    <Context.Provider value={{ expenselist, setExpenselist }}>
      <Home />
    </Context.Provider>
  );
}
export default Top;
