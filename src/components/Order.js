import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";
import "./Order.css";

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  };
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
          <button onClick={() => this.props.removeFromOrder(key)}>
            &times;
          </button>
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
        <ul className="order">
          {orderKeys.map(this.showOrder)}
          <li className="total">Total:{formatPrice(total)}</li>
        </ul>
      </div>
    );
  }
}

export default Order;
