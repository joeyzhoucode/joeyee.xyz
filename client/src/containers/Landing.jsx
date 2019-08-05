import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as globalActions from "actions/globalActions";
import * as profileActions from "actions/profileActions";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import HeaderLinks from "containers/HeaderLinks.jsx";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// Product Section
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import landingPageStyle from "assets/jss/material-kit-react/containers/landingPage.jsx";

// NavPills
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";

import NavPills from "components/NavPills/NavPills.jsx";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";

class LandingPage extends React.Component {
  componentDidMount() {
    this.props.profileActions.profileFetch();
  }

  componentDidUpdate() {
    const userId = this.props.profile.id;
    if(userId && !this.props.global.connection) {
      this.props.globalActions.messengerSubscribe(userId, "Global", data => { console.log(data); });
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          rightLinks={<HeaderLinks/>}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "dark"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.webp")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h1 className={classes.title}>Hey there, I'm Joey.</h1>
                <h3>Welcome to my personal page.</h3>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.description}>Here are some of my hobby projects.</h2>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={4}>
                              <InfoArea
                                title="Free Chat"
                                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                icon={Chat}
                                iconColor="info"
                                vertical
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <InfoArea
                                title="Verified Users"
                                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                icon={VerifiedUser}
                                iconColor="success"
                                vertical
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <InfoArea
                                title="Fingerprint"
                                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                icon={Fingerprint}
                                iconColor="danger"
                                vertical
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

LandingPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(landingPageStyle)(LandingPage));