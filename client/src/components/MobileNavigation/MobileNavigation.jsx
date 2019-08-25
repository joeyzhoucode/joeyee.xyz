import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// @material-ui/icons
import { LocationOn, List, Schedule, BarChart } from "@material-ui/icons";
// core components

import mobileNavigationStyle from "assets/jss/components/mobileNavigationStyle.jsx";

function MobileNavigation({ ...props }) {
  const { classes } = props;
  const [value, setValue] = React.useState('gyms');

  function handleChange(_event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} classes={{ root: classes.root }}>
      <BottomNavigationAction
        label="Gyms"
        value="gyms"
        icon={<LocationOn />}
        classes={{
          root: classes.action,
          selected: classes.selected,
        }} 
      />
      <BottomNavigationAction
        label="Programs"
        value="programs"
        icon={<List />}
        classes={{
          root: classes.action,
          selected: classes.selected,
        }} 
      />
      <BottomNavigationAction
        label="Workouts"
        value="workouts"
        icon={<Schedule />}
        classes={{
          root: classes.action,
          selected: classes.selected,
        }} 
      />
      <BottomNavigationAction
        label="Results"
        value="results"
        icon={<BarChart />}
        classes={{
          root: classes.action,
          selected: classes.selected,
        }} 
      />
    </BottomNavigation>
  );
}

MobileNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(mobileNavigationStyle)(MobileNavigation);
