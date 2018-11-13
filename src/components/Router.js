import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Store from "./Store";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/fish-shop" component={Store} />
      <Route path="/store/:storeId" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
