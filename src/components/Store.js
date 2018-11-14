import React from "react";
import PropTypes from "prop-types";
import { getStoreName } from "../helpers";

class Store extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  storeInput = React.createRef();
  goToStore = e => {
    e.preventDefault();
    const storeName = this.storeInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.storeInput}
          required
          placeholder="Store Name"
          defaultValue={getStoreName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default Store;
