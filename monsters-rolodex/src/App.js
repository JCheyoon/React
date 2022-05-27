import "./App.css";
import "./search-box.styles.css";
import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";
import CardList from "./CardList";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  const getMonsters = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setMonsters(json);
  };
  useEffect(() => {
    getMonsters();
  }, []);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
