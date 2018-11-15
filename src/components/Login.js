import React from "react";
import PropTypes from "prop-types";
import "./Login.css";

const Login = props => {
  return (
    <div className="login">
      <h1>Inventory</h1>
      <p>Sign in to manage your store's inventory.</p>
      <button className="github" onClick={() => props.authenticate("Github")}>
        Login With Github
      </button>
      <button
        className="facebook"
        onClick={() => props.authenticate("Facebook")}
      >
        Login With Facebook
      </button>
      <button className="twitter" onClick={() => props.authenticate("Twitter")}>
        Login With Twitter
      </button>
    </div>
  );
};

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
