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
import { Home, Person, Dashboard, Extension, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/containers/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  componentDidMount() {
    this.props.userActions.userFetch();
    window.addEventListener('beforeinstallprompt', (e) => {
      this.props.homeActions.saveInstallPrompt(e);
    });
  }

  componentDidUpdate() {
    const userId = this.props.user.id;
    if(userId && !this.props.home.connection) {
      this.props.homeActions.messengerSubscribe(userId, "Global", data => { console.log(data); });
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    const AuthenticationLink = this.props.user && this.props.user.id ?
      <a
        className={classes.dropdownLink}
        href="/login"
      >
        <Extension className={classes.icons} /> Login
      </a> : 
      <a
        className={classes.dropdownLink}
        href="/logout"
      >
        <Extension className={classes.icons} /> Logout
      </a>;
    const InstallAppLink = this.props.home.installPrompt ? 
      <div
        className={classes.dropdownLink}
        onClick={() => {
          this.props.home.installPrompt.prompt(); 
          this.props.home.installPrompt.userChoice.then((_choice) => { 
            this.props.homeActions.destroyInstallPrompt();
          });
        }}
      >
        <CloudDownload className={classes.icons} /> Install App
      </div> : <div></div>;
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
            rel="noopener"
            className={classes.navLink}
            onClick={() => { this.props.homeActions.historyPush('/'); }}
          >
            <Home className={classes.icons} /> Home
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
            rel="noopener"
            className={classes.navLink}
            onClick={() => { this.props.homeActions.historyPush('/about'); }}
          >
            <Person className={classes.icons} /> About Me
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Quick Access"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Dashboard}
            dropdownList={[
              AuthenticationLink,
              <div
                className={classes.dropdownLink}
                onClick={() => { this.props.homeActions.historyPush('/components'); }}
              >
                <Extension className={classes.icons} /> Components
              </div>,
              InstallAppLink
            ]}
          />
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