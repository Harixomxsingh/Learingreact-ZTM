import { Component } from "react";
import "./App.css";

class App extends Component {
  // const [count, setCount] = useState(0)
  // let's render the element using map
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
          id: 0,
        },
        {
          name: "Frank",
          id: 1,
        },
        {
          name: "Jacky",
          id: 2,
        },
        {
          name: "Sparky",
          id: 3,
        },
        {
          name: "Tomy",
          id: 4,
        },
      ],
    };
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
