import { Component } from "react";
import "./App.css";

class App extends Component {
  // const [count, setCount] = useState(0)
  constructor() {
    super();
    this.state = {
      name: "Sumit",
    };
  }

  render() {
    return (
      <div className="App">
        <div>Hi, {this.state.name}</div>
        <button
          onClick={() => {
            this.setState({ name: "Hari om Singh" });
          }}
        >
          Change name
        </button>
      </div>
    );
  }
}

export default App;
