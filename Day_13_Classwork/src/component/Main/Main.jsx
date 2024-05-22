import { useEffect, useReducer } from "react";
import "./Main.css";
function Main() {
  function reducerfn(state, action) {
    switch (action.type) {
      case "entered_text":
        return {
          text: action.payload,
        };
      case "uppercase": {
        let newtext = action.payload.toUpperCase();
        return {
          text: newtext,
        };
      }
      case "lowercase": {
        let newtext = action.payload.toLowerCase();
        return {
          text: newtext,
        };
      }
      case "clear_text": {
        return {
          text: "",
        };
      }
      case "remove_spaces": {
        let newtext = action.payload
          .split(" ")
          .filter((word) => {
            return word != "";
          })
          .reduce((acc, cv) => {
            return acc + cv + " ";
          }, "");

        return {
          text: newtext,
        };
      }
      case "no_of_character": {
        return {
          ...state,
          noc: action.payload.length,
        };
      }
      case "no_of_words": {
        let newtext = action.payload.split(" ").filter((word) => {
          return word != "";
        });
        return { ...state, now: newtext.length };
      }
      case "reading_time": {
        let time = action.payload / 125;

        return { ...state, rt: time };
      }
      case "preview": {
        return { ...state, preview_text: action.payload };
      }
    }
  }
  const [state, dispatch] = useReducer(reducerfn, {
    text: "",
    noc: 0,
    now: 0,
    rt: 0,
    preview_text: "",
  });
  useEffect(() => {
    dispatch({ type: "no_of_character", payload: state.text });
    dispatch({ type: "no_of_words", payload: state.text });
    dispatch({ type: "reading_time", payload: state.now });
    dispatch({ type: "preview", payload: state.text });
  }, [state.text, state.now]);
  function copiedtext(text) {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  return (
    <div className="main">
      <h1 style={{ textAlign: "center", fontSize: "37px" }}>
        TextUtils - Word Counter, Charecter Counter, Remove Extra Space
      </h1>
      <h2>Enter Your Text Here:</h2>
      <textarea
        name=""
        id=""
        value={state.text}
        onChange={(e) => {
          dispatch({ type: "entered_text", payload: e.target.value });
        }}
        rows={10}
      ></textarea>
      <button
        onClick={() => {
          dispatch({ type: "uppercase", payload: state.text });
        }}
      >
        Convert Uppercase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "lowercase", payload: state.text });
        }}
      >
        Convert Lowercase
      </button>
      <button
        onClick={() => {
          dispatch({ type: "clear_text" });
        }}
        style={{ backgroundColor: "#bb2d3b" }}
      >
        Clear Text
      </button>
      <button
        onClick={() => {
          copiedtext(state.text);
        }}
        style={{ backgroundColor: "#198754" }}
      >
        Copied To ClipBoard
      </button>
      <button
        onClick={() => {
          dispatch({ type: "remove_spaces", payload: state.text });
        }}
      >
        Remove Spaces
      </button>
      <p>Number of charecters : {state.noc}</p>

      <p>Nummber of words :{state.now}</p>
      <p>Reading Time:{state.rt}</p>

      <div>
        <h2 style={{ textAlign: "center" }}>PREVIEW DOCUMENT</h2>
        <textarea rows={10} value={state.preview_text}></textarea>
      </div>
    </div>
  );
}
export default Main;
