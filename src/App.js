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

  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({ ninjas: ninjas });
  };

  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  };

  render() {
    return (
      <div className="App">
        <h1>welcome to react</h1>
        <Ninja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;