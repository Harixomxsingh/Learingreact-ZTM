import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  // let's render the element using map
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchBox: "",
    };
  }

  // componentDidMount - render once at the component
  componentDidMount() {
    // this is gonna a promises
    // fetch data from an api
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      // console.log(response);
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
    });
  }
  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => {
      return { searchBox: searchField };
    });
  };
  render() {
    const { onSearchChange } = this;
    const { monsters, searchBox } = this.state;
    // https://jsonplaceholder.typicode.com/users

    // filter based on our input
    let filteredMosters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchBox);
    });

    return (
      <div className="App">
        <SearchBox searchBox={searchBox} onSearchChange={onSearchChange} />
        <CardList monsters={filteredMosters} />
      </div>
    );
  }
}

export default App;
