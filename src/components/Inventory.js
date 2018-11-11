import React from "react";
import AddFishForm from "./AddFishForm";
// import "./Inventory.css";

const Inventory = props => {
  return (
    <div className="inventory">
      <h1>Inventory</h1>
      <AddFishForm addFish={props.addFish} />
    </div>
  );
};

export default Inventory;
