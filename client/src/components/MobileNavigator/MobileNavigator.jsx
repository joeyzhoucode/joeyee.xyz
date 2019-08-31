import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigatorActions from "actions/navigatorActions";
import { Route, Redirect } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// core components
import mobileNavigatorStyle from "assets/jss/components/mobileNavigatorStyle.jsx";

class MobileNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      style: this.props.classes.animated
    }
  }

  componentDidMount() {
    // we add a hidden class to the card and after 400 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ style: this.props.classes.root });
      }.bind(this),
      400
    );
  }

  handleChange = (_event, active) => {
    this.props.navigatorActions.pushHistory(this.props.root + this.props.actions[active].route);
    this.setState({ active });
  };
  render() {
    const { actions, classes, root } = this.props;

    return (
      <div>
        { 
          actions.map((action, key) => {
            return (
              <Route
                key={key}
                path={root + action.route}
                render={action.content}
              />
            )
          })
        }
        <Redirect exact from="/" to={root + actions[0].route} />
        <BottomNavigation
          value={this.state.active}
          onChange={this.handleChange}
          classes={{ root: this.state.style }}
        >
          { 
            actions.map((action, key) => {
              return (
                <BottomNavigationAction
                  key={key}
                  label={action.label}
                  icon={<action.icon />}
                  classes={{
                    root: classes.action,
                    selected: classes.selected,
                  }}
                />
              )
            })
          }
        </BottomNavigation>
      </div>
    );
  }
}

MobileNavigator.defaultProps = {
  active: 0,
};

MobileNavigator.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object,
      label: PropTypes.string,
      route: PropTypes.string,
    })
  ),
  classes: PropTypes.object.isRequired,
  root: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    navigator: state.navigator,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigatorActions: bindActionCreators(navigatorActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(mobileNavigatorStyle)(MobileNavigator));
