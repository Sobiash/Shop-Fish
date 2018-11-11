import React from "react";
import Fishes from "./SampleFishes.json";
import { formatPrice } from "./helpers";
import "./Fish.css";

class Fish extends React.Component {
  render() {
    return (
      <React.Fragment>
        {Fishes.map(details => {
          return (
            <li className="menu-fish" key={details.id}>
              <img src={details.image} alt={details.name} />
              <h3 className="fish-name">
                {details.name}
                <span className="price">{formatPrice(details.price)}</span>
              </h3>
              <p className="desc">{details.desc}</p>
              <button disabled={details.status === "unavailable"}>
                {details.status === "available" ? "Add To Cart" : "Sold Out!"}
              </button>
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Fish;
