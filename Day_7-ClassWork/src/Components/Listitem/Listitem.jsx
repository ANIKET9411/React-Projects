import "./Listitem.css";

function Listitem(props) {
  return (
    <li key={props} className="itemcss">
      <input type="checkbox" />
      {props}
      <button
        onClick={() => {
          //   deletetolist({});
        }}
      >
        Delete
      </button>
    </li>
  );
}
export default Listitem;
