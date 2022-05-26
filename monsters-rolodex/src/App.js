import "./App.css";
import SearchBox from "./SearchBox";
import { useState } from "react";

const App = () => {
  const [] = useState();
  const onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
  };
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox></SearchBox>
    </div>
  );
};

export default App;
