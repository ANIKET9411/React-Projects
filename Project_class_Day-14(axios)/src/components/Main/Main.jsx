import "./Main.css";
import { useState } from "react";
let API_KEY = "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";
function Main() {
  const [value, setValue] = useState();
  const [url, setUrl] = useState("");

  async function fetchapi(val) {
    console.log(val);
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        method: "POST",
        body: JSON.stringify({ inputs: val }),
      }
    );
    const result = await response.blob();
    console.log(result);
    const imageUrl = URL.createObjectURL(result);
    console.log(imageUrl);
    setUrl(imageUrl);
    setValue("");
  }

  return (
    <>
      <div className="searchArea">
        <h1>Image Generation App</h1>
        <div className="Searchportion">
          <input
            type="text"
            placeholder="Enter Text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              fetchapi(value);
            }}
          >
            Get Image
          </button>
        </div>
      </div>

      {url !== "" && (
        <div className="displayArea">
          <img src={url} alt="" width="300px" height="300px" />
        </div>
      )}
    </>
  );
}
export default Main;
