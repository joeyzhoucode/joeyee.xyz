import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigatorActions from "actions/navigatorActions";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "components/CustomButtons/Button.jsx";
import SexyContainer from "components/Sexy/SexyContainer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import picture from "assets/img/faces/joey.webp";

import aboutPageStyle from "assets/jss/material-kit-react/containers/aboutPage.jsx";

class AboutPage extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Parallax small filter image={require("assets/img/profile-bg.webp")} />
        <SexyContainer>
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
        </SexyContainer>
      </div>
    );
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object
};

function mapStateToProps(state) {
  return state.navigator;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(navigatorActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(aboutPageStyle)(AboutPage));
