import "./Progressbar.css";
import { useEffect, useState } from "react";
function Progressbar() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("Loading...");
  useEffect(() => {
    const interval = setInterval(() => {
      if (value < 100) {
        setValue(value + 1);
      } else {
        setName("Completed!");
      }
    }, 70);

    return () => clearInterval(interval);
  }, [value]);
  return (
    <>
      <h1>Progress Bar</h1>
      <div
        style={{
          border: "2px solid black",
          width: "50%",
          position: "relative",
          margin: "0 auto",
          borderRadius: "50px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "40px",
            backgroundColor: "green",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "30%",
            textAlign: "center",
            width: "100%",
          }}
        >
          {value}%
        </div>
      </div>
      <h3>{name}</h3>
    </>
  );
}
export default Progressbar;
