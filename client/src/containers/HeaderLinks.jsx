/*eslint-disable*/
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as globalActions from "actions/globalActions";
import * as profileActions from "actions/profileActions";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Home, Person, Dashboard, Extension } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/containers/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            target="_blank"
            rel="noopener"
            className={classes.navLink}
            onClick={() => { this.props.globalActions.historyPush('/'); }}
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
            onClick={() => { this.props.globalActions.historyPush('/profile'); }}
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
                onClick={() => { this.props.globalActions.historyPush('/login'); }}
              >
                <Extension className={classes.icons} /> Login
              </div>,
              <div
                className={classes.dropdownLink}
                onClick={() => { this.props.globalActions.historyPush('/components'); }}
              >
                <Extension className={classes.icons} /> Components
              </div>,
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
    global: state.global,
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    globalActions: bindActionCreators(globalActions, dispatch),
    profileActions: bindActionCreators(profileActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(headerLinksStyle)(HeaderLinks));