import "./Props2.css";
import data from "./data2";
import Props2_card from "./Props2_card/Props2_card";
function Props2() {
  return (
    <div>
      <h1>Props-2</h1>
      {data.map((ele) => {
        return <Props2_card key={ele.genre} value={ele} />;
      })}
    </div>
  );
}
export default Props2;
