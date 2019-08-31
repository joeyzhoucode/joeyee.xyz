import {
  container,
  defaultFont,
  onBackgroundColor,
  transition,
  elevation04,
  elevation16,
  drawerWidth
} from "assets/jss/globalStyles.jsx";

const navigatorStyle = {
  appBar: {
    display: "flex",
    border: "0",
    padding: "0.325rem 0",
    marginBottom: "20px",
    width: "100%",
    ...elevation04,
    color: onBackgroundColor,
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "fixed",
    boxShadow: "none !important",
  },
  container: {
    ...container,
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  },
  appResponsive: {
    margin: "20px 10px"
  },
  drawerPaper: {
    color: onBackgroundColor,
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
    ...elevation16
  }
};

export default navigatorStyle;
