import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "actions/homeActions";
import * as userActions from "actions/userActions";
import * as jogglAppActions from "actions/jogglAppActions";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import SectionBasics from "./Components/Sections/SectionBasics.jsx";
import SectionNavbars from "./Components/Sections/SectionNavbars.jsx";
import SectionTabs from "./Components/Sections/SectionTabs.jsx";
import SectionPills from "./Components/Sections/SectionPills.jsx";
import SectionNotifications from "./Components/Sections/SectionNotifications.jsx";
import SectionTypography from "./Components/Sections/SectionTypography.jsx";
import SectionJavascript from "./Components/Sections/SectionJavascript.jsx";
import SectionCarousel from "./Components/Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "./Components/Sections/SectionCompletedExamples.jsx";

import componentsStyle from "assets/jss/material-kit-react/containers/components.jsx";

class Joggl extends React.Component {
  componentDidMount() {
    const geoSuccess = (pos) => {
      this.props.jogglAppActions.poiFetch(pos.coords.latitude, pos.coords.longitude);
    }
    const geoError = (err) => {
      console.log(err.message);
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionCarousel />
          {JSON.stringify(this.props.jogglApp.poi ? Object.keys(this.props.jogglApp.poi) : {})}

          {/* <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

Joggl.propTypes = {
  classes: PropTypes.object
};

function mapStateToProps(state) {
  return {
    home: state.home,
    user: state.user,
    jogglApp: state.jogglApp,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    jogglAppActions: bindActionCreators(jogglAppActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(componentsStyle)(Joggl));
