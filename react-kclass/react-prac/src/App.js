import "./App.css";
import Btn from "./components/Btn";
import { useState, useEffect } from "react";
import * as PropTypes from "prop-types";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);

  console.log("I run all the time");
  const runOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(runOnlyOnce, []);

  return (
    <>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </>
  );
}

export default App;
