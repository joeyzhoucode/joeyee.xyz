/*eslint-disable*/
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "actions/homeActions";
import * as userActions from "actions/userActions";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Home, Person, Lock, LockOpen, CloudDownload, OfflineBoltOutlined } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/containers/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  render() {
    const { classes } = this.props;

    const userId = this.props.user.id;

    const InstallAppLink = this.props.home.installPrompt ? (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => {
          this.props.home.installPrompt.prompt(); 
          this.props.home.installPrompt.userChoice.then((_choice) => { 
            this.props.homeActions.destroyInstallPrompt();
          });
        }}
      >
        <CloudDownload className={classes.icons} /> Install App
      </Button> 
    ): null;

    const HomeLink = (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => { this.props.homeActions.historyPush('/home'); }}
      >
        <Home className={classes.icons} /> Home
      </Button>
    );

    const AboutLink = (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => { this.props.homeActions.historyPush('/about'); }}
      >
        <Person className={classes.icons} /> About Me
      </Button>
    );

    const AuthenticationLink = (
      <Button
        color="transparent"
        target="_blank"
        rel="noopener"
        className={classes.navLink}
        href={ userId ? "/logout" : "/login" }
      >
        { userId ? <LockOpen className={classes.icons} /> :
        <Lock className={classes.icons} /> }
        { userId ? "Logout" : "Login" }
      </Button>
    );

    const EnergeeAppLink = (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => { this.props.homeActions.historyPush('/app/energee'); }}
      >
        <OfflineBoltOutlined className={classes.icons} /> Energee App
      </Button>
    );

    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          {InstallAppLink}
        </ListItem>
        <ListItem className={classes.listItem}>
          {HomeLink}
        </ListItem>
        <ListItem className={classes.listItem}>
          {AboutLink}
        </ListItem>
        <ListItem className={classes.listItem}>
          {AuthenticationLink}
        </ListItem>
        <ListItem className={classes.listItem}>
          {EnergeeAppLink}
        </ListItem>
      </List>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object
};

function mapStateToProps(state) {
  return {
    home: state.home,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(headerLinksStyle)(HeaderLinks));