import {
  container,
  title,
  onBackgroundColor
} from "assets/jss/globalStyles.jsx";

import imagesStyles from "assets/jss/imagesStyles.jsx";

const aboutStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: onBackgroundColor,
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyles,
};

export default aboutStyle;
