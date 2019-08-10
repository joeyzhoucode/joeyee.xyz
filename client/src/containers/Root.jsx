import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Components from "containers/Components/Components.jsx";
import Home from "containers/Home.jsx";
import About from "containers/About.jsx";
import Login from "containers/Login.jsx";
import Header from "containers/Header.jsx";

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/components" component={Components} />
          <Route component={Home} />
        </Switch>
      </Header>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root;