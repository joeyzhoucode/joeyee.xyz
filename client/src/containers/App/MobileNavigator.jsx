import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigatorActions from "actions/navigatorActions";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import withStyles from "@material-ui/core/styles/withStyles";
import mobileNavigatorStyle from "assets/jss/containers/App/mobileNavigatorStyle.jsx";

class MobileNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      animatedStyle: this.props.classes.animatedRoot
    }
  }

  componentDidMount() {
    setTimeout(
      function() { this.setState({ animatedStyle: this.props.classes.root }); }.bind(this),
      400
    );
  }

  handleChange = (_event, active) => {
    this.props.pushHistory(this.props.root + this.props.actions[active].route);
    this.setState({ active });
  };

  render() {
    const { actions, classes, root } = this.props;

    return (
      <div>
        { 
          actions.map((action, key) => {
            return (<Route key={key} path={root + action.route} render={action.content} />)
          })
        }
        <Redirect exact from={root} to={root + actions[0].route} />
        <BottomNavigation
          value={this.state.active}
          onChange={this.handleChange}
          classes={{ root: this.state.animatedStyle }}
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
  animatedStyle: null
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
  return state.navigator;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(navigatorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(mobileNavigatorStyle)(MobileNavigator));
