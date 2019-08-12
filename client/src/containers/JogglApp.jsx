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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import { Place, Schedule, BarChart, Settings } from "@material-ui/icons";
// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
// sections for this page

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
        <Parallax small image={require("assets/img/joggl-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Joggl</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
              <div className={classes.section}>
                <GridContainer justify="left">
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <NavPills
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Gyms",
                          tabIcon: Place,
                          tabContent: (
                            <span>
                              <p>
                                {JSON.stringify(this.props.jogglApp.poi ? Object.keys(this.props.jogglApp.poi) : {})}
                              </p>
                              <br />
                              <p>
                                Dramatically visualize customer directed convergence
                                without revolutionary ROI. Collaboratively
                                administrate empowered markets via plug-and-play
                                networks. Dynamically procrastinate B2C users after
                                installed base benefits.
                              </p>
                            </span>
                          )
                        },
                        {
                          tabButton: "Workouts",
                          tabIcon: Schedule,
                          tabContent: (
                            <span>
                              <p>
                                Efficiently unleash cross-media information without
                                cross-media value. Quickly maximize timely
                                deliverables for real-time schemas.
                              </p>
                              <br />
                              <p>
                                Dramatically maintain clicks-and-mortar solutions
                                without functional solutions. Dramatically visualize
                                customer directed convergence without revolutionary
                                ROI. Collaboratively administrate empowered markets
                                via plug-and-play networks. Dynamically
                                procrastinate B2C users after installed base
                                benefits.
                              </p>
                            </span>
                          )
                        },
                        {
                          tabButton: "Results",
                          tabIcon: BarChart,
                          tabContent: (
                            <span>
                              <p>
                                Collaboratively administrate empowered markets via
                                plug-and-play networks. Dynamically procrastinate
                                B2C users after installed base benefits.
                              </p>
                              <br />
                              <p>
                                Dramatically visualize customer directed convergence
                                without revolutionary ROI. Collaboratively
                                administrate empowered markets via plug-and-play
                                networks. Dynamically procrastinate B2C users after
                                installed base benefits.
                              </p>
                            </span>
                          )
                        },
                        {
                          tabButton: "Settings",
                          tabIcon: Settings,
                          tabContent: (
                            <span>
                              <p>
                                Collaboratively administrate empowered markets via
                                plug-and-play networks. Dynamically procrastinate
                                B2C users after installed base benefits.
                              </p>
                              <br />
                              <p>
                                Dramatically visualize customer directed convergence
                                without revolutionary ROI. Collaboratively
                                administrate empowered markets via plug-and-play
                                networks. Dynamically procrastinate B2C users after
                                installed base benefits.
                              </p>
                            </span>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
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
