import { useContext, useState, useEffect } from "react";
import { Context } from "../../context";
import { v4 as uuidv4 } from "uuid";
import Expenses from "../Expenses/Expenses";

function Home() {
  const { expenselist, setExpenselist } = useContext(Context);
  //   console.log(expenselist);
  const [name, setName] = useState();
  const [cost, setCost] = useState();
  const [data, setData] = useState([]);
  const savetolist = (name, cost, id) => {
    setExpenselist([...expenselist, { name: name, cost: cost, id: id() }]);
    setName("");
    setCost("");
  };
  useEffect(() => {
    const val = expenselist.reduce((acc, cv) => {
      return acc + parseInt(cv.cost);
    }, 0);
    console.log(val);
    setData([val, 2000 - val]);
    localStorage.setItem("List", JSON.stringify(expenselist));
  }, [expenselist]);
  return (
    <div className="w-6/12 mx-auto my-11 shadow-md shadow-slate-50 p-12">
      <h1 className="text-blue-300 font-extrabold text-5xl">
        My Budget Planner
      </h1>
      <div className="flex justify-between p-5">
        <p className="px-5 py-5 bg-zinc-100 text-black font-bold rounded-md">
          BUDGET:2000
        </p>
        <p className="px-5 py-5 bg-zinc-100 text-black font-bold rounded-md">
          REMAINING:{data[1]}
        </p>
        <p className="px-5 py-5 bg-zinc-100 text-black font-bold rounded-md">
          SPENT SO FAR:{data[0]}
        </p>
      </div>
      <Expenses />
      <div>
        <h2 className="text-red-400 text-4xl font-bold">Add Expenses</h2>
        <div className="flex justify-between m-10">
          <input
            className="w-72 my-2 h-10"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Name"
          />
          <input
            className="w-72 my-2 h-10"
            type="number"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
            placeholder="Enter Cost"
            required
          />
        </div>
        <button
          className="py-3 bg-red-500 px-7"
          onClick={() => {
            savetolist(name, cost, uuidv4);
          }}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}
export default Home;
