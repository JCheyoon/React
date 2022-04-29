import "./App.css";
import { useState } from "react";

function App() {
  const [minutes, setMinutes] = useState(0);
  const [flipped, setFlipped] = useState(0);
  const onChange = (e) => {
    setMinutes(e.target.value);
  };
  const reset = () => {
    return setMinutes(0);
  };
  const onFlip = () => {
    return setFlipped(!flipped);
  };

  return (
    <>
      <div>
        <h1>Super converter</h1>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
        />
        <h4>You want to convert {minutes}</h4>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={Math.round(minutes / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled
        />
      </div>
      <button onClick={reset}>Rest</button>
      <button onClick={onFlip}>Flipped</button>
    </>
  );
}

export default App;
