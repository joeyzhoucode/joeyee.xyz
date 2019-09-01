import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigatorActions from "actions/navigatorActions";
import * as gymLabActions from "actions/gymLabActions";
import ReactPlayer from 'react-player';

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardAnimated from "components/Card/CardAnimated.jsx";
import AppNavigator from "containers/App/AppNavigator.jsx";
import { Airplay, Settings } from "@material-ui/icons";

import withStyles from "@material-ui/core/styles/withStyles";
import gymLabStyle from "assets/jss/material-kit-react/containers/gymLabPage.jsx";

class ClipsCafe extends React.Component {
  componentDidMount() {

  }

  render() {
    const { classes } = this.props;
    const watchTab = () => (
      <CardAnimated>
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=pQV0WEdT_OE'}
          width='100%'
          height='480px'
          volume={1}
          // playing={this.props.player.videoState === "play"}
          controls={true}
          // onPlay={() => { this.props.playerBroadcast({ videoState: "play", theatreCode: this.props.path }) }}
          // onPause={() => { this.props.playerBroadcast({ videoState: "pause", theatreCode: this.props.path }) }}
          // ref={(player) => { this.player = player } }
        />
        <GridContainer className={classes.container}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <h3 className={classes.subtitle}>ClipsCafe</h3>
          </GridItem>
        </GridContainer>
      </CardAnimated>
    );

    const settingsTab = () => (
      <CardAnimated>
        <GridContainer className={classes.container}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <h3 className={classes.subtitle}>Settings</h3>
          </GridItem>
        </GridContainer>
      </CardAnimated>
    );

    return (
      <div>
        <AppNavigator
          root={"/app/clipsCafe"}
          actions={[
            {
              icon: Airplay,
              label: "Watch",
              route: "/watch",
              content: watchTab,
            },
            {
              icon: Settings,
              label: "Settings",
              route: "/settings",
              content: settingsTab,
            }
          ]}
        />
      </div>
    );
  }
}

ClipsCafe.propTypes = {
  classes: PropTypes.object
};

function mapStateToProps(state) {
  return {
    router: state.router,
    navigator: state.navigator,
    gymLab: state.gymLab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    navigatorActions: bindActionCreators(navigatorActions, dispatch),
    gymLabActions: bindActionCreators(gymLabActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(gymLabStyle)(ClipsCafe));
