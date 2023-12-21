import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(0);
  const handleClick = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "add":
        console.log(e.target.id);
        e.target.id = "+";
        break;
      case "substract":
        e.target.id = "-";
        break;
      case "divide":
        e.target.id = "/";
        break;
      case "multiply":
        e.target.id = "X";
        break;
      case "equals":
        e.target.id = "=";
        break;
      case "decimal":
        e.target.id = ".";
        break;

      default:
        console.error("UnkKNOW");
        break;
    }
    console.log(e.target.id);
    setInput((prevState) => prevState + e.target.id);
  };
  const clearAll = () => {
    setInput("");
    setOutput(0);
  };
  const calculate = () => {
    setOutput(0);
    setOutput(eval(input));
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator-container">
          <div className="display">
            <h2>{input}=</h2>
            <h2> {output}</h2>
          </div>
          <div className="controllers-container">
            <div className="AC button" id="clear" onClick={clearAll}>
              AC
            </div>
            <div className=" button" id="divide" onClick={handleClick}>
              /
            </div>
            <div className="button" id="multiply" onClick={handleClick}>
              X
            </div>
            <div className="button" id="7" onClick={handleClick}>
              7
            </div>
            <div className="button" id="8" onClick={handleClick}>
              8
            </div>
            <div className="button" id="9" onClick={handleClick}>
              9
            </div>
            <div className="button" onClick={handleClick} id="substract">
              -
            </div>
            <div className="button" id="4" onClick={handleClick}>
              4
            </div>
            <div className="button" id="5" onClick={handleClick}>
              5
            </div>
            <div className="button" id="6" onClick={handleClick}>
              6
            </div>
            <div className="button" id="add" onClick={handleClick}>
              +
            </div>
            <div className="button" id="1" onClick={handleClick}>
              1
            </div>
            <div className="button" id="2" onClick={handleClick}>
              2
            </div>
            <div className="button" id="3" onClick={handleClick}>
              3
            </div>
            <div className="button equals" id="equals" onClick={calculate}>
              =
            </div>
            <div className="button button-0" id="0" onClick={handleClick}>
              0
            </div>
            <div className="button" id="decimal" onClick={handleClick}>
              .
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
