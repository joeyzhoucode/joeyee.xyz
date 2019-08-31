import {
  defaultFont,
  onBackgroundColor,
  onSurfaceColor,
  elevation04,
} from "assets/jss/globalStyles.jsx";

const appNavigatorStyle = {
  root: {
    display: "flex",
    border: "0",
    padding: "0.325rem 0",
    width: "100%",
    transition: "all 150ms ease 0s",
    flexFlow: "row nowrap",
    position: "fixed",
    bottom: "0",
    color: onBackgroundColor,
    ...elevation04
  },
  animatedRoot: {
    opacity: "0",
    transform: "translate3d(0, 60px, 0)",
    display: "flex",
    border: "0",
    padding: "0.325rem 0",
    width: "100%",
    transition: "all 150ms ease 0s",
    flexFlow: "row nowrap",
    position: "fixed",
    bottom: "0",
    color: onBackgroundColor,
    ...elevation04
  },
  action: {
    ...defaultFont,
    '&$selected': {
      color: onSurfaceColor,
    },
    color: onSurfaceColor,
  },
  selected: {
    color: onSurfaceColor,
  }
};

export default appNavigatorStyle;
