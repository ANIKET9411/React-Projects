import { createContext, useState } from "react";
import Home from "../Component/Home/Home";

export const Contexts = createContext();
function Contextarea() {
  const [list, setList] = useState([]);
  return (
    <Contexts.Provider value={{ list, setList }}>
      <Home />
    </Contexts.Provider>
  );
}
export default Contextarea;
