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
    window.addEventListener('beforeinstallprompt', (e) => {
      this.props.homeActions.saveInstallPrompt(e);
    });
  }

  render() {
    const { classes, ...rest } = this.props;
    const AppInstall = this.props.home.installPrompt ? 
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
              <div
                className={classes.dropdownLink}
                onClick={() => { this.props.homeActions.historyPush('/login'); }}
              >
                <Extension className={classes.icons} /> Login
              </div>,
              <div
                className={classes.dropdownLink}
                onClick={() => { this.props.homeActions.historyPush('/components'); }}
              >
                <Extension className={classes.icons} /> Components
              </div>,
              AppInstall
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