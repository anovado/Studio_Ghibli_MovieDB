import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
// import TodoList from "./pages/TodoList";
// import Search from "./pages/Search";
// import Completed from "./pages/Completed";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/todo" component={TodoList} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/completed" component={Completed} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
