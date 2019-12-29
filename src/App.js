import React, { Component } from "react";
import Ninja from "./Ninja";

class App extends Component {
  state = {
    ninjas: [
      { name: "sara", age: 26, belt: "black", id: 1 },
      { name: "naomi", age: 39, belt: "black", id: 2 },
      { name: "sylva", age: 18, belt: "black", id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>welcome to react</h1>
        <Ninja ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
