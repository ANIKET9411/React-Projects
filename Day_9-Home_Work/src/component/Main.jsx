import "./Main.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
function Main() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  const [num, setNum] = useState(true);
  const [lower, setLower] = useState(true);
  const [upper, setUpper] = useState(true);
  const [special, setSpecial] = useState(true);
  const [insertedValue, setInsertedvalue] = useState(8);
  const [password, setPassword] = useState("");

  function generatePassword() {
    if (
      num === false &&
      lower === false &&
      upper === false &&
      special === false
    ) {
      toast.error("Invalid Input");
      setPassword("");
      return;
    }
    let Password = "";
    if (num) {
      Password += numbers;
    }
    if (lower) {
      Password += lowerCase;
    }
    if (upper) {
      Password += upperCase;
    }
    if (special) {
      Password += symbols;
    }
    console.log(Password);

    let new_password = "";
    for (let i = 0; i < insertedValue; i++) {
      let index = Math.floor(Math.random() * Password.length);
      console.log(index);
      let Char = Password.charAt(index);
      console.log(Char);
      new_password = new_password + Char;
    }
    setPassword(new_password);
    // console.log(password);
  }
  function copyPassword() {
    let textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    toast.success("Copied to the clipboard!");
  }
  useEffect(() => {
    generatePassword();
  }, [insertedValue, num, lower, upper, special]);

  return (
    <div className="main">
      <h1>Password Generator powered by ketone</h1>
      <p>Create unique passwords and store them safely in ketone.</p>
      <div className="box">
        <div className="display">
          <div className="display_password">{password}</div>
          <div className="display_options">
            <div onClick={generatePassword}>
              <i className="fa-solid fa-repeat"></i>
            </div>
            <button className="copy_btn" onClick={copyPassword}>
              Copy Password
            </button>
          </div>
        </div>
        <div className="selected_length">
          <p>Password length:</p>
          <input
            type="range"
            min="4"
            max="32"
            value={insertedValue}
            onChange={(e) => {
              setInsertedvalue(e.target.value);
            }}
          />
        </div>
        {/* <hr /> */}
        <div className="selectOptions">
          <div className="selectedType">
            <input
              type="checkbox"
              checked={upper}
              onChange={(e) => {
                setUpper(e.target.checked);
              }}
            />
            <input type="text" placeholder="Selected UpperCase Character" />
            <p>Use uppercase</p>
          </div>
          <div className="selectedType">
            <input
              type="checkbox"
              checked={lower}
              onChange={(e) => {
                setLower(e.target.checked);
              }}
            />
            <input type="text" placeholder="Selected LowerCase Character" />
            <p>Use Lowercase</p>
          </div>
          <div className="selectedType">
            <input
              type="checkbox"
              checked={num}
              onChange={(e) => {
                setNum(e.target.checked);
                console.log(e.target.checked);
              }}
            />
            <input type="text" placeholder="Selected Number Character" />
            <p>Use numbers</p>
          </div>
          <div className="selectedType">
            <input
              type="checkbox"
              checked={special}
              onChange={(e) => {
                setSpecial(e.target.checked);
                console.log(e.target.checked);
              }}
            />{" "}
            <input type="text" placeholder="Selected Special Character" />
            <p>Use special character</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
