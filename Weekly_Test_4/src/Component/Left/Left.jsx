import { employees } from "../../Data/Data";
import { useContext } from "react";
import { Contexts } from "../../context";
function Left() {
  const { list, setList } = useContext(Contexts);
  //   const [active, setActive] = useState(true);
  const addtoTeam = (name, age, id) => {
    setList([
      ...list,
      {
        setter: true,
        id,
        name,
        age,
      },
    ]);
    // setActive(false);
  };
  return (
    <div className="w-4/12 mx-10 p-10 border-8 border-solid border-white overflow-auto h-screen">
      <h1 className="font-extrabold text-4xl my-5">EMPLOYEES</h1>
      {employees.map((employee) => {
        return (
          <div
            key={employee.id}
            className="flex  justify-between border-white border-2 border-solid m-5 p-5 items-center"
          >
            <h3 className="font-5xl w-32">{employee.first_name}</h3>
            <p>{employee.age}</p>
            {!employee.setter && (
              <button
                onClick={(e) => {
                  console.log(e);
                  addtoTeam(employee.first_name, employee.age, employee.id);
                }}
                className="px-5 py-2 bg-blue-600 rounded-xl"
              >
                ADD
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default Left;
