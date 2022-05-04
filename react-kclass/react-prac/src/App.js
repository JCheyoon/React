import "./App.css";
import Btn from "./components/Btn";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => setValue("Revert Change");
  return (
    <>
      <Btn text={value} changeValue={changeValue} />
      <Btn text="Confirm" />
    </>
  );
}

export default App;
