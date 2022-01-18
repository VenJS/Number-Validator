import "./App.css";
import { useState, useMemo} from "react";

function App() {
  const [number, setNumber] = useState();
  

  function checkReg(value) {
    if (!value || value.length === 0) {
      return false;
    }
    return !!/^[0-9]*$/g.exec(value)
  }

  const memo = useMemo(() => checkReg(number)
  , [number]);

  
  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <span className="icon is-small is-right">
          <i className={{memo} ? 'fas fa-times' : "fa-check"}   />
        </span>
      </div>
    </div>
  );
}

export default App;
