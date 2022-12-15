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
        },
        {
          name: "Frank",
        },
        {
          name: "Jacky",
        },
        {
          name: "Sparky",
        },
        {
          name: "Tomy",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {/* <div>Hi, {this.state.name}</div> */}
        <div>
          {this.state.monsters.map((monster) => {
            return <h1>{monster.name}</h1>;
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
