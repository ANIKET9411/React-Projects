import { useReducer, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
// import { Chart } from "chart.js";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  // Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  LineElement,
  BarElement,

  LinearScale,
  CategoryScale,
  Title,
  // Tooltip,
  Legend
);
function Todos() {
  const [valuefromuser, setValuefromuser] = useState("");
  const [searchvalue, setSearchValue] = useState("");
  const [editid, setEditid] = useState("");
  const [editTask, setEditTask] = useState("");
  const [showarea, setShowarea] = useState(false);
  const reducerfn = (state, action) => {
    switch (action.type) {
      case "ADD_TO_TODO": {
        return {
          todos: [...state.todos, { task: action.payload, id: Date.now() }],
        };
      }
      case "DELETE_FROM_TODO": {
        let updatelist = state.todos.filter((todo) => {
          return todo.id !== action.payload;
        });
        return { todos: updatelist };
      }
      case "UPDATE_TODO": {
        let updatedlist = state.todos.map((todo) => {
          if (todo.id === action.payload.editid) {
            todo.task = action.payload.editTask;
            return todo;
          }
          return todo;
        });
        console.log(updatedlist);
        return {
          todos: updatedlist,
        };
      }
    }
  };
  const edit_todo = (todo) => {
    console.log("Aniket");
    setEditTask(todo.task);
    setEditid(todo.id);
    setShowarea(true);
    const minute = new Date(todo.id).toISOString().substring(0, 16);
    console.log(minute);
  };
  const saveEditTask = () => {
    dispatch({ type: "UPDATE_TODO", payload: { editTask, editid } });
    setShowarea(false);
  };

  const [state, dispatch] = useReducer(reducerfn, {
    todos: [],
  });
  const getTodosPerMinute = () => {
    const todosPerMinute = {};
    state.todos.forEach((todo) => {
      const minute = new Date(todo.id).toISOString().substring(0, 16); // YYYY-MM-DDTHH:mm
      if (!todosPerMinute[minute]) {
        todosPerMinute[minute] = 0;
      }
      todosPerMinute[minute]++;
    });
    return todosPerMinute;
  };

  const todosPerMinute = getTodosPerMinute();
  const chartData = {
    labels: Object.keys(todosPerMinute),
    datasets: [
      {
        label: "Todos per Minute",
        data: Object.values(todosPerMinute),
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Todos per minute",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "top",
    },
  };
  return (
    <div>
      <div className="text-center">
        <h1>NOTES</h1>
        <input
          type="text"
          className="h-12 p-3 rounded-tl-lg rounded-bl-lg"
          value={valuefromuser}
          disabled={showarea}
          onChange={(e) => {
            setValuefromuser(e.target.value);
          }}
        />
        <button
          className="h-12 bg-blue-600 rounded-tr-lg rounded-br-lg"
          onClick={() => {
            if (valuefromuser === "") {
              return;
            }

            dispatch({ type: "ADD_TO_TODO", payload: valuefromuser });
            setValuefromuser("");
          }}
        >
          ADD
        </button>
      </div>
      <div className="p-5">
        <span className="text-3xl mr-5"> Find:</span>
        <input
          className="h-10 p-2 border-2 border-solid border-white"
          type="text"
          value={searchvalue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {!showarea && state.todos.length !== 0 ? (
          state.todos
            .filter((todo) => {
              return todo.task
                .toLowerCase()
                .includes(searchvalue.toLowerCase());
            })
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  className="flex justify-between w-1/6 m-5 flex-col text-center border-4 border-solid border-zinc-400"
                >
                  <h3 className="w-full h-auto p-5">{todo.task}</h3>
                  <br />
                  <div className="flex">
                    <button
                      className="w-1/2"
                      onClick={() => {
                        edit_todo(todo);
                      }}
                    >
                      EDIT
                    </button>
                    <button
                      className="w-1/2"
                      onClick={() => {
                        dispatch({
                          type: "DELETE_FROM_TODO",
                          payload: todo.id,
                        });
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              );
            })
        ) : (
          <h1>No Todo is present</h1>
        )}
      </div>
      {showarea && (
        <div className="text-center flex flex-col w-2/5 p-10 m-auto border-4 border-solid border-zinc-400">
          <input type="text" className="text-center" value={editid} disabled />
          <input
            className="h-12 p-2 m-5"
            type="text"
            value={editTask}
            onChange={(e) => {
              setEditTask(e.target.value);
            }}
          />
          <button onClick={saveEditTask}>Done</button>
        </div>
      )}
      <Bar data={chartData} options={options} />
    </div>
  );
}
export default Todos;
