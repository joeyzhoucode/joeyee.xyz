import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "actions/homeActions";
import * as userActions from "actions/userActions";
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
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import picture from "assets/img/faces/joey.webp";

import aboutPageStyle from "assets/jss/material-kit-react/containers/aboutPage.jsx";

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          color="transparent"
          brand="joeyee.xyz"
          rightLinks={<HeaderLinks/>}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "dark"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.webp")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={picture} 
                        alt="..."
                        className={imageClasses} 
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Joey Zhou</h3>
                      <h6>Software Developer</h6>
                      <Button
                        justIcon 
                        link
                        className={classes.margin5} 
                        href="https://github.com/joeyzhoucode"
                      >
                        <i className={"fab fa-github"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href="https://linkedin.com/in/joeyzhoucode"
                      >
                        <i className={"fab fa-linkedin"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.description}>
                    <p>
                      Hey there! My name is Joey Zhou and I am a senior year student at the
                      University of Toronto studying Computer Engineering. Currently, I'm working
                      at Shopify on the API patterns team, working on our API infrastructure.
                      Before Shopify, I worked for a year as a fullstack developer at two other companies.
                    </p>
                  </div>
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

AboutPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(aboutPageStyle)(AboutPage));
