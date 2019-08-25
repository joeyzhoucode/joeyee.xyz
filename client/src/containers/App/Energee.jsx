import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigatorActions from "actions/navigatorActions";
import * as energeeActions from "actions/energeeActions";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { FormControlLabel, Radio } from '@material-ui/core';
// @material-ui/icons
import { FiberManualRecord } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardAnimated from "components/Card/CardAnimated.jsx";
import MobileNavigation from "components/MobileNavigation/MobileNavigation.jsx";
// sections for this page
import energeeStyle from "assets/jss/material-kit-react/containers/energeePage.jsx";

class Energee extends React.Component {
  componentDidMount() {
    const geoSuccess = (pos) => {
      this.props.energeeActions.gymsFetch(pos.coords.latitude, pos.coords.longitude);
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
          <h3 className={classes.subtitle}>Choose your gym</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          Placeholder
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          {Object.keys(this.props.energee.gyms.list).map((gym, index) => {
            return (
              <div className={classes.stackedRadio} key={gym}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={index === this.props.energee.gyms.selected}
                      onClick={(_e) => this.props.energeeActions.gymSelect(index)}
                      value={gym}
                      name={gym}
                      aria-label={gym}
                      icon={<FiberManualRecord />}
                      checkedIcon={<FiberManualRecord />}
                      disabled={
                        this.props.energee.gyms.list[gym].opening_hours &&
                        !this.props.energee.gyms.list[gym].opening_hours.open_now
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
          <h3 className={classes.subtitle}>Choose your workout program</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          Placeholder
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6}>
          {this.props.energee.programs.list.map((program, index) => {
            return (
              <div className={classes.stackedRadio} key={program.name}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={index === this.props.energee.programs.selected}
                      onClick={(_e) => this.props.energeeActions.programSelect(index)}
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
          <h3 className={classes.subtitle}>Complete your exercises</h3>
        </GridItem>
      </GridContainer>
    );

    const resultsTab = (
      <GridContainer className={classes.container}>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <h3 className={classes.subtitle}>View your results</h3>
        </GridItem>
      </GridContainer>
    );

    return (
      <div>
        <CardAnimated>
          { gymsTab }
          { programsTab }
          { exercisesTab }
          { resultsTab }
        </CardAnimated>
        <MobileNavigation />
      </div>
    );
  }
}

Energee.propTypes = {
  classes: PropTypes.object
};

function mapStateToProps(state) {
  return {
    navigator: state.navigator,
    energee: state.energee,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigatorActions: bindActionCreators(navigatorActions, dispatch),
    energeeActions: bindActionCreators(energeeActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(energeeStyle)(Energee));
