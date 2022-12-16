import { Component } from "react";
import "./App.css";

class App extends Component {
  // const [count, setCount] = useState(0)
  // let's render the element using map
  constructor() {
    super();
    this.state = {
      monsters: [],
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
            console.log(this.state);
          }
        )
      );
    });
  }

  render() {
    // https://jsonplaceholder.typicode.com/users#
    return (
      <div className="App">
        {/* <div>Hi, {this.state.name}</div> */}
        <div>
          {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
        </div>
        {/* <button
          onClick={() => {
            this.setState({ name: "Hari om Singh" });
          }}
        >
          Change name
        </button> */}
      </div>
    );
  }
}

export default App;
