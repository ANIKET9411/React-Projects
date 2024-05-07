import "./Props1.css";
import data from "./data1";
function Props1() {
  return (
    <div className="props1">
      {data.map((ele) => {
        return (
          <div className="props_card" key={ele.colorName}>
            <div
              style={{
                backgroundColor: ele.colorCode,
                width: "100px",
                height: "100px",
              }}
            ></div>
            <h2>{ele.colorCode}</h2>
            <h3>{ele.colorName}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default Props1;
