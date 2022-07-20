import React, { useState, useEffect } from "react";
import CardList from "./Component/card-list/card-list.component";
import SearchBox from "./Component/search-box/search-bar.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonsters(user));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };

  const monsterFilter = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <SearchBox
        type="search"
        className="monsters-search-box"
        onSearchHandler={onSearchChange}
        placeholderText={"Search monster"}
      />

      <CardList monster={monsterFilter} />
    </div>
  );
  // class App extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       monsters: [],
  //       searchField: "",
  //     };
  //   }

  //   componentDidMount() {
  //     fetch("http://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((user) =>
  //         this.setState(() => {
  //           return { monsters: user };
  //         })
  //       );
  //   }

  //   onSearchChange = (event) => {
  //     const searchField = event.target.value.toLocaleLowerCase();
  //     this.setState(() => {
  //       return { searchField };
  //     });
  //   };

  //   render() {
  // const { searchField, monsters } = this.state;

  //     return (
};

export default App;
