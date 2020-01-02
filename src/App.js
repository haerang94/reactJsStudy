import React, { Component } from "react";
import Ninja from "./Ninja";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "sara", age: 26, belt: "black", id: 1 },
      { name: "naomi", age: 26, belt: "black", id: 2 },
      { name: "sylva", age: 26, belt: "black", id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>welcome to react</h1>
        <Ninja ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
