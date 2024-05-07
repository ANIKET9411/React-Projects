import "./Main.css";

function Main(props) {
  console.log(props);

  return (
    <div className="main">
      <h1>{props.quote}</h1>
      <p>{props.writer}</p>
    </div>
  );
}
export default Main;
