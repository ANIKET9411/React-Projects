import "./Main.css";
import { useState } from "react";
import { useRef } from "react";
import Markdown from "react-markdown";
function Main() {
  const [value, setValue] = useState();
  const textareaRef = useRef();
  return (
    <div className="main">
      <textarea
        ref={textareaRef}
        value={value}
        name=""
        id=""
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>
      <div className="display_text">
        <Markdown>{value}</Markdown>
      </div>
    </div>
  );
}
export default Main;
