import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Characters from "../pages/Characters";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/characters" component={Characters} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
