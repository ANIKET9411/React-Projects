import { useContext } from "react";
import { Context } from "../../context";
function Expenses() {
  const { expenselist, setExpenselist } = useContext(Context);
  const deletefromlist = (ids) => {
    let updatelist = expenselist.filter((expense) => {
      return expense.id !== ids;
    });
    setExpenselist(updatelist);
  };

  return (
    <>
      <div className="p-2 m-2">
        <h2 className="text-4xl text-blue-400">Expenses</h2>
        {expenselist.length === 0 && (
          <h2 className="  text-4xl m">Add Data To List . . . . .</h2>
        )}
        {expenselist.map((expense) => {
          return (
            <div
              key={expense.id}
              className="flex justify-between p-2 m-2 text-3xl"
            >
              <p className="w-2/6">{expense.name}</p>
              <p>Rs{expense.cost}</p>
              <button
                onClick={() => {
                  deletefromlist(expense.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
        {/* {console.log(expenselist)} */}
      </div>
    </>
  );
}
export default Expenses;
