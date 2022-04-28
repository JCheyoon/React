import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h3>Total Clicked:{counter}</h3>
      <button onClick={onClick}>Click me</button>
    </>
  );
}

export default App;
