import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigatorActions from "actions/navigatorActions";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {
  AppBar,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import navigatorStyle from "assets/jss/containers/navigatorStyle.jsx";

class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }

  handleDrawerToggle = () => { this.setState({ mobileOpen: !this.state.mobileOpen }); }

  headerColorChange = () => {
    const { classes } = this.props;
    if (window.pageYOffset > 100) {
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
  }

  componentDidMount() {
    window.addEventListener("scroll", this.headerColorChange);

    this.props.fetchUser();

    window.addEventListener('beforeinstallprompt', (e) => {
      this.props.saveInstallPrompt(e);
    });
  }

  componentDidUpdate() {
    const userId = this.props.user.id;
    if(userId && !this.props.connection) {
      this.props.subscribeChannel(userId, "Global", data => { console.log(data); });
    }
  }

  componentWillUnmount() { window.removeEventListener("scroll", this.headerColorChange); }

  render() {
    const { classes, children } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes.color]: "transparent"
    });

    const brandComponent = (
      <Button
        className={ classes.title } 
        onClick={ () => { this.props.historyPush('/'); }
      }>
        joeyee.xyz
      </Button>
    );

    return (
      <div>
        <AppBar className={ appBarClasses }>
          <Toolbar className={ classes.container }>
            { brandComponent }
            <Hidden smDown implementation="css">
              <HeaderLinks/>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={ this.handleDrawerToggle }
              >
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
          <Hidden mdUp implementation="js">
            <Drawer
              variant="temporary"
              anchor="right"
              open={ this.state.mobileOpen }
              classes={{ paper: classes.drawerPaper }}
              onClose={ this.handleDrawerToggle }
            >
              <div className={ classes.appResponsive }>
                <HeaderLinks/>
              </div>
            </Drawer>
          </Hidden>
        </AppBar>
        {children}
      </div>
    );
  }
}

Navigator.defaultProp = {
  color: "transparent",
};

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return state.navigator
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(navigatorActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(navigatorStyle)(Navigator));
