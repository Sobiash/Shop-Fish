import React from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

// import "./Inventory.css";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };
  render() {
    return (
      <div className="inventory">
        <h1>Inventory</h1>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            fishKey={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
