import React from "react";
import { formatPrice } from "./helpers";
// import "./Order.css";

class Order extends React.Component {
  showOrder = key => {
    const fish = this.props.fishes[key];
    const orderCount = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!fish) {
      return null;
    }
    if (isAvailable) {
      return (
        <li key={key}>
          {orderCount} lbs {fish.name}
          {formatPrice(orderCount * fish.price)}
        </li>
      );
    } else {
      return <li>Sorry {fish ? fish.name : "fish"} is no longer available.</li>;
    }
  };

  render() {
    const orderKeys = Object.keys(this.props.order);
    const total = orderKeys.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const orderCount = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + orderCount * fish.price;
      } else {
        return prevTotal;
      }
    }, 0);
    return (
      <div className="order-wrap">
        <h1>Order</h1>
        <ul>{orderKeys.map(this.showOrder)}</ul>
        Total: {formatPrice(total)}
      </div>
    );
  }
}

export default Order;
