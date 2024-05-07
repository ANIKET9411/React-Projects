import "./Main.css";
import data from "../Data/data";
import { useState } from "react";
import { toast } from "react-toastify";
function Main() {
  const [value, setValue] = useState("");
  const [reqpara, setReqPara] = useState([]);
  function showpara() {
    let requiredpara = parseInt(value);
    if (requiredpara <= 0) {
      toast.error("Invalid Input", {
        position: "top-center",
      });
      setReqPara(data.slice(0, 0));
      return;
    } else if (requiredpara > 8) {
      toast.info("Please choose number from 1-8", {
        position: "top-center",
      });
      setReqPara(data.slice(0, 0));
      return;
    }
    setReqPara(data.slice(0, requiredpara));
  }
  return (
    <div className="main">
      <div className="main_upper">
        <h1>TIRED OF BORING LOREM IPSUM?</h1>
        <div className="main_upper_inner">
          <p>Paragraphs:</p>
          <input
            type="number"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button onClick={showpara}>GENERATE</button>
        </div>
      </div>
      <div className="main_lower">
        {reqpara.map((ele) => {
          return <p key={ele}>{ele}</p>;
        })}
      </div>
    </div>
  );
}
export default Main;
