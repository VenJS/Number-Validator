import "./App.css";
import { useState, useMemo } from "react";

function App() {
  const [text, setNumber] = useState();

  

  const memo = useMemo(() => {
    const regEx = /^[0-9]*$/g.exec(text);
    if (regEx && regEx[0] === text) {
      return true;
    } else {
      return false;
    }
  }, [text]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <div>fsdfsd{memo}</div>
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <span className="icon is-small is-right">
          <i className={ memo  ? "fas fa-times" : "fa-check"} />
        </span>
      </div>
    </div>
  );
}

export default App;
