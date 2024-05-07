import "./Main.css";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function Main() {
  const [subject, setsubject] = useState("");
  const [hour, sethour] = useState("");
  const [list, setlist] = useState(
    JSON.parse(localStorage.getItem("eduplanner")) || []
  );
  function addlistitem() {
    if (subject.trim() !== "" && hour !== "") {
      setlist([...list, { sub: subject, hours: hour, id: uuidv4() }]);
      setsubject("");
      sethour("");
    }
  }
  useEffect(() => {
    localStorage.setItem("eduplanner", JSON.stringify(list));
  }, [list]);
  function increment(id) {
    const updatelist = list.map((ele) => {
      if (ele.id === id) {
        ele.hours = parseInt(ele.hours) + 1;
      }
      return ele;
    });
    setlist(updatelist);
  }
  function decrement(id) {
    const updatelist = list.map((ele) => {
      if (ele.id === id && ele.hours > 0) {
        ele.hours = parseInt(ele.hours) - 1;
      }
      return ele;
    });
    setlist(updatelist);
  }
  function deleteitem(id) {
    const updatelist = list.filter((ele) => {
      return ele.id !== id;
    });
    setlist(updatelist);
  }
  function edititem(sub, ho, id) {
    if (hour === "" && subject === "") {
      const updatelist = list.filter((ele) => {
        if (ele.id !== id) {
          return ele;
        } else {
          console.log(ho);
          console.log(sub);

          sethour(parseInt(ho));
          setsubject(sub);
        }
      });

      setlist(updatelist);
    }
  }
  return (
    <>
      <div className="main">
        <h1>Education Planner</h1>
        <input
          placeholder="Subject"
          type="text"
          value={subject}
          onChange={(e) => {
            setsubject(e.target.value);
          }}
        />
        <input
          type="number"
          value={hour}
          onChange={(e) => {
            sethour(e.target.value);
          }}
          placeholder="Hours"
        />
        <button onClick={addlistitem}>Add</button>
      </div>
      <div className="planner_list">
        {list.map((ele) => {
          return (
            <li
              style={{ display: "flex", justifyContent: "space-between" }}
              key={ele.id}
            >
              <p>{ele.sub}</p>
              <p>{ele.hours}</p>
              <button
                className="incre"
                onClick={() => {
                  increment(ele.id);
                }}
              >
                +
              </button>
              <button
                className="decre"
                onClick={() => {
                  decrement(ele.id);
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  deleteitem(ele.id);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  edititem(ele.sub, ele.hours, ele.id);
                }}
              >
                edit
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
}
export default Main;
