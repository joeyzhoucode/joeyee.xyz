import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "actions/homeActions";
import * as userActions from "actions/userActions";
import * as energeeAppActions from "actions/energeeAppActions";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
// @material-ui/icons
import { LocationOn, List, Schedule, BarChart, FiberManualRecord } from "@material-ui/icons";
// core components
import Footer from "components/Footer/Footer.jsx";
import SexyContainer from "components/Sexy/SexyContainer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import NavPapers from "components/NavPills/NavPapers.jsx";
// sections for this page
import image from "assets/img/faces/avatar.jpg";

import energeeAppStyle from "assets/jss/material-kit-react/containers/energeeAppPage.jsx";

class Energee extends React.Component {
  componentDidMount() {
    const geoSuccess = (pos) => {
      this.props.energeeAppActions.gymsFetch(pos.coords.latitude, pos.coords.longitude);
    }
    const geoError = (err) => {
      console.log(err.message);
    }
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  }

  render() {
    const { classes } = this.props;
    const gymsTab = (
      <GridContainer className={classes.container}>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <h3>Choose your gym</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          <img src={image} alt="..." className={classes.imgRaised} />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          {Object.keys(this.props.energeeApp.gyms.list).map((gym, index) => {
            return (
              <div className={classes.stackedRadio} key={gym}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={index === this.props.energeeApp.gyms.selected}
                      onClick={(_e) => this.props.energeeAppActions.gymSelect(index)}
                      value={gym}
                      name={gym}
                      aria-label={gym}
                      icon={<FiberManualRecord />}
                      checkedIcon={<FiberManualRecord />}
                      disabled={
                        this.props.energeeApp.gyms.list[gym].opening_hours &&
                        !this.props.energeeApp.gyms.list[gym].opening_hours.open_now
                      }
                    />
                  }
                  label={gym}
                />
              </div>
            );
          })}
        </GridItem>
      </GridContainer>
    );

    const programsTab = (
      <GridContainer className={classes.container}>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <h3>Choose your workout program</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          <img src={image} alt="..." className={classes.imgRaised} />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          {this.props.energeeApp.programs.list.map((program, index) => {
            return (
              <div className={classes.stackedRadio} key={program.name}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={index === this.props.energeeApp.programs.selected}
                      onClick={(_e) => this.props.energeeAppActions.programSelect(index)}
                      value={program.name}
                      name={program.name}
                      aria-label={program.name}
                      icon={<FiberManualRecord />}
                      checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                    />
                  }
                  label={program.name}
                />
              </div>
            );
          })}
        </GridItem>
      </GridContainer>
    );

    const exercisesTab = (
      <GridContainer className={classes.container}>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <h3>Complete your exercises</h3>
        </GridItem>
      </GridContainer>
    );

    const resultsTab = (
      <GridContainer className={classes.container}>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <h3>View your results</h3>
        </GridItem>
      </GridContainer>
    );

    return (
      <div>
        <Parallax small image={require("assets/img/energee-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Energee</h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <SexyContainer>
          <div className={classes.container}>
              <div className={classes.section}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <NavPapers
                      color="primary"
                      tabs={[
                        {
                          tabButton: "Gyms",
                          tabIcon: LocationOn,
                          tabContent: gymsTab
                        },
                        {
                          tabButton: "Programs",
                          tabIcon: List,
                          tabContent: programsTab
                        },
                        {
                          tabButton: "Exercises",
                          tabIcon: Schedule,
                          tabContent: exercisesTab
                        },
                        {
                          tabButton: "Results",
                          tabIcon: BarChart,
                          tabContent: resultsTab
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </SexyContainer>
        <Footer />
      </div>
    );
  }
}

Energee.propTypes = {
  classes: PropTypes.object
};

function mapStateToProps(state) {
  return {
    home: state.home,
    user: state.user,
    energeeApp: state.energeeApp,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
    energeeAppActions: bindActionCreators(energeeAppActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(energeeAppStyle)(Energee));
