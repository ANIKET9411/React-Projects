import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "./Main.css";
const Main = () => {
  const [item, setitem] = useState("");
  const [Additem, setadditem] = useState([]);
  function addtolist() {
    if (item.trim() === "") {
      toast.error("Please enter a valid item name", {
        position: "top-center",
        theme: "dark",
      });
      return;
    }
    toast.success("Add to the list", {
      position: "top-center",
      theme: "dark",
    });
    setadditem([...Additem, { groitem: item, isdone: false, id: uuidv4() }]);
    setitem("");
  }
  function deletetolist(id) {
    const updatedlist = Additem.filter((ele) => {
      return ele.id !== id;
    });
    setadditem(updatedlist);
    toast.success("Delete from the list", {
      position: "top-center",
      theme: "dark",
    });
  }
  function changedone(id) {
    console.log("here");
    const updatedlist = Additem.map((ele) => {
      if (ele.id === id) {
        ele.isdone = !ele.isdone;
      }
      return ele;
    });
    console.log(updatedlist);
    // console.log(Additem);
    setadditem(updatedlist);
  }
  return (
    <div>
      <h1>GroceryBudget</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setitem(e.target.value);
        }}
      />
      <button onClick={addtolist}>Add item</button>
      <div>
        {Additem.map((itemlist) => {
          return (
            <li key={itemlist.id} className="itemcss">
              <input
                type="checkbox"
                onChange={() => {
                  changedone(itemlist.id);
                }}
              />
              <p
                style={{
                  textDecoration: itemlist.isdone ? "line-through" : "",
                }}
              >
                {itemlist.groitem}
              </p>
              <button
                onClick={() => {
                  deletetolist(itemlist.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};
export default Main;
