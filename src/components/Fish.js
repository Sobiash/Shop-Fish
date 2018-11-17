import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";
import "./Fish.css";
import "../SampleFishes";

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func,
    ordKey: PropTypes.string
  };
  render() {
    return (
      <li className="menu-fish">
        <img
          src={this.props.details.image}
          alt={this.props.details.name}
          className="img"
        />
        <h3 className="fish-name">
          {this.props.details.name}
          <span className="price">{formatPrice(this.props.details.price)}</span>
        </h3>
        <p className="desc">{this.props.details.desc}</p>
        <button
          disabled={this.props.details.status === "unavailable"}
          onClick={() => this.props.addToOrder(this.props.ordkey)}
        >
          {this.props.details.status === "available"
            ? "Add To Cart"
            : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
