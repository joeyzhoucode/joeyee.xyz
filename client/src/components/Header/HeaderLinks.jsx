/*eslint-disable*/
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigatorActions from "actions/navigatorActions";
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

    const InstallAppLink = this.props.installPrompt ? (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => {
          this.props.installPrompt.prompt(); 
          this.props.installPrompt.userChoice.then((_choice) => { 
            this.props.destroyInstallPrompt();
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
        onClick={() => { this.props.historyPush('/home'); }}
      >
        <Home className={classes.icons} /> Home
      </Button>
    );

    const AboutLink = (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => { this.props.historyPush('/about'); }}
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
        onClick={() => { this.props.historyPush('/app/energee'); }}
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
  return state.navigator;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(navigatorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(headerLinksStyle)(HeaderLinks));