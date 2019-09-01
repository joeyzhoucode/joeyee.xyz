import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Navigator from "containers/Navigator.jsx";
import About from "containers/About.jsx";
import Login from "containers/Login.jsx";
import Components from "containers/Components/Components.jsx";
import Home from "containers/Home.jsx";

import ClipsCafe from "containers/App/ClipsCafe.jsx";
import GymLab from "containers/App/GymLab.jsx";

class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Navigator>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Login} />
              <Route path="/components" component={Components} />
              <Route path="/app">
                <Route path="/app/clipsCafe" component={ClipsCafe} />
                <Route path="/app/gymLab" component={GymLab} />
              </Route>
              <Route component={Home} />
            </Switch>
          </Navigator>
        </ConnectedRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root;