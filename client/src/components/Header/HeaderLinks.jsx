import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigatorActions from "actions/navigatorActions";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { 
  Home,
  Person,
  Lock,
  LockOpen,
  CloudDownload,
  OfflineBoltOutlined,
  AirplayOutlined
} from "@material-ui/icons";

import Button from "components/CustomButtons/Button.jsx";

import withStyles from "@material-ui/core/styles/withStyles";
import headerLinksStyle from "assets/jss/material-kit-react/containers/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  render() {
    const { classes } = this.props;

    const userId = this.props.user.id;

    const HomeLink = (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => { this.props.pushHistory('/home'); }}
      >
        <Home className={classes.icons} /> Home
      </Button>
    );

    const AboutLink = (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => { this.props.pushHistory('/about'); }}
      >
        <Person className={classes.icons} /> About Me
      </Button>
    );

    const AuthenticationLink = (
      <Button
        color="transparent"
        className={classes.navLink}
        href={ userId ? "/logout" : "/login" }
      >
        { userId ? <LockOpen className={classes.icons} /> :
        <Lock className={classes.icons} /> }
        { userId ? "Logout" : "Login" }
      </Button>
    );

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

    const GymLabLink = (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => { this.props.pushHistory('/app/gymLab'); }}
      >
        <OfflineBoltOutlined className={classes.icons} /> GymLab
      </Button>
    );

    const ClipsCafeLink = (
      <Button
        color="transparent"
        className={classes.navLink}
        onClick={() => { this.props.pushHistory('/app/clipsCafe'); }}
      >
        <AirplayOutlined className={classes.icons} /> ClipsCafe
      </Button>
    );

    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          {HomeLink}
        </ListItem>
        <ListItem className={classes.listItem}>
          {AboutLink}
        </ListItem>
        <ListItem className={classes.listItem}>
          {GymLabLink}
        </ListItem>
        <ListItem className={classes.listItem}>
          {ClipsCafeLink}
        </ListItem>
        <ListItem className={classes.listItem}>
          {AuthenticationLink}
        </ListItem>
        <ListItem className={classes.listItem}>
          {InstallAppLink}
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