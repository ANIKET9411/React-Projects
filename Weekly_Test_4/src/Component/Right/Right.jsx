import { useContext, useEffect, useState } from "react";
import { Contexts } from "../../context";
import { employees } from "../../Data/Data";
function Right() {
  const { list, setList } = useContext(Contexts);
  const [AGE, setAGE] = useState(0);
  const removefromlist = (ids) => {
    let updatedlist = list.filter((employee) => {
      return employee.id !== ids;
    });
    employees.map((emp) => {
      if (emp.id === ids) {
        emp.isEnable = true;
      }
    });
    setList(updatedlist);
  };
  const sortbyage = () => {
    const updatelist = [...list].sort((a, b) => {
      return a.age - b.age;
    });
    console.log(updatelist);
    setList(updatelist);
  };
  useEffect(() => {
    let newage = list.reduce((acc, cv) => {
      return acc + cv.age;
    }, 0);
    console.log(newage);
    newage = newage / list.length;
    setAGE(newage.toFixed(2));
  }, [list]);
  return (
    <>
      <div className="w-4/12 p-10 border-8 border-solid border-white h-screen overflow-auto">
        <h1 className="font-extrabold text-4xl my-5 align-top">TEAM</h1>
        <button
          className="px-5 py-2 rounded-lg bg-slate-500  font-bold"
          onClick={sortbyage}
        >
          Sort By Age
        </button>
        {list.map((employee) => {
          console.log(employee);
          return (
            <div
              key={employee.id}
              className="flex  justify-between border-white border-2 border-solid m-5 p-5 items-center"
            >
              <h3 className="w-32">{employee.name}</h3>
              <p>{employee.age}</p>
              <button
                onClick={() => {
                  removefromlist(employee.id);
                }}
                className="px-5 py-2 bg-red-600 rounded-xl"
              >
                REMOVE
              </button>
            </div>
          );
        })}
        {list.length === 0 ? (
          <div className="m-8 text-2xl">No Employee is Selected Yet...</div>
        ) : (
          <div>Average Age: {AGE}</div>
        )}
      </div>
    </>
  );
}
export default Right;
