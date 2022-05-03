import "./App.css";
import { useState } from "react";
import MinutesToHours from "./components/MinutesToHours";
import KmToMiles from "./components/KmToMiles";

function App() {
  const [index, setIndex] = useState("xx");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  return (
    <>
      <h1>Super converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your Unit</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </>
  );
}

export default App;
