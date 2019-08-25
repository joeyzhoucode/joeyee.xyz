import { 
  container,
  title,
  onBackgroundColor,
  onSurfaceColor,
} from "assets/jss/globalStyles.jsx";

import imagesStyles from "assets/jss/imagesStyles.jsx";

const homeStyle = {
  container: {
    zIndex: "12",
    color: onBackgroundColor,
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    color: onBackgroundColor,
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
    overflow: "hidden !important"
  },
  description: {
    color: onSurfaceColor,
    textAlign: "center"
  },
  ...imagesStyles,
};

export default homeStyle;
