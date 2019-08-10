import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "actions/homeActions";
import * as userActions from "actions/userActions";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import HeaderLinks from "containers/HeaderLinks.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  headerColorChange = () => {
    const { classes } = this.props;
    if (window.pageYOffset > 200) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes["transparent"]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes["dark"]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes["transparent"]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes["dark"]);
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.headerColorChange);

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
  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerColorChange);
  }
  render() {
    const { classes, children } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes.fixed]: true,
      [classes.color]: "transparent"
    });
    const brandComponent = 
      <div>
        <Button className={classes.title} href="https://github.com/joeyzhoucode" target="_blank" rel="noopener">GitHub</Button> | 
        <Button className={classes.title} href="https://linkedin.com/in/joeyzhoucode" target="_blank" rel="noopener">LinkedIn</Button>
      </div>;
    return (
      <div>
        {children}
        <AppBar className={appBarClasses}>
          <Toolbar className={classes.container}>
            {brandComponent}
            <Hidden smDown implementation="css">
              <HeaderLinks/>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
          <Hidden mdUp implementation="js">
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper
              }}
              onClose={this.handleDrawerToggle}
            >
              <div className={classes.appResponsive}>
                <HeaderLinks/>
              </div>
            </Drawer>
          </Hidden>
        </AppBar>
      </div>
    );
  }
}

Header.defaultProp = {
  color: "transparent",
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(headerStyle)(Header));
