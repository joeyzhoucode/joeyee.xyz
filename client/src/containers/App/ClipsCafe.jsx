import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as clipsCafeActions from "actions/clipsCafeActions";
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
    const { subscribePlayer, mountPlayer, recievePlayerCommand } = this.props.clipsCafeActions;
    subscribePlayer(recievePlayerCommand);
    mountPlayer(this.player);
    //fetchPlayerCommand("Global");
  }

  componentWillUnmount() {
    this.props.clipsCafeActions.unsubscribePlayer();
  }

  render() {
    const { classes, clipsCafe, clipsCafeActions } = this.props;
    const watchTab = () => (
      <CardAnimated>
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=pQV0WEdT_OE'}
          width='100%'
          height='480px'
          volume={1}
          playing={clipsCafe.videoState === 1}
          controls={true}
          onPlay={() => { clipsCafeActions.broadcastPlayerCommand({ videoState: 1 }) }}
          onPause={() => { clipsCafeActions.broadcastPlayerCommand({ videoState: 0 }) }}
          ref={(player) => { this.player = player } }
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
    clipsCafe: state.clipsCafe,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clipsCafeActions: bindActionCreators(clipsCafeActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(gymLabStyle)(ClipsCafe));
