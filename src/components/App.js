import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import "../index.css";
class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
    });
    console.log(fishes);
  };

  render() {
    return (
      <div className="App">
        <div className="menu">
          <Header />
          <ul className="fishes">
            <Fish />
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}
export default App;
