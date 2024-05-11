import { data } from "../../data/data";
import { useState } from "react";
import "./Restaurant.css";
import Restaurant_list from "../Restaurant_list/Restaurant_list";
function Restaurant() {
  const [searchvalue, setSearchvalue] = useState("");
  return (
    <div className="restaurant">
      <input
        type="text"
        value={searchvalue}
        onChange={(e) => {
          setSearchvalue(e.target.value);
        }}
        placeholder="Search restaurant..."
      />
      <div className="res_list">
        {data
          .filter((selected_type) => {
            return selected_type.name
              .toLowerCase()
              .includes(searchvalue.toLowerCase());
          })
          .map((restaurant) => {
            //   console.log(restaurant.name);
            return (
              <Restaurant_list key={restaurant._id.$oid} values={restaurant} />
            );
          })}
      </div>
    </div>
  );
}
export default Restaurant;
