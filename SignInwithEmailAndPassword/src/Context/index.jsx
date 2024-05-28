import { createContext, useState } from "react";
// import Home from "../component/Home/Home";
export const UserContext = createContext();
function Start({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export default Start;
