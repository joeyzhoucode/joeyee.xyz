import { container, primaryColor } from "assets/jss/globalStyles.jsx";

const gymLabStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    marginBottom: "10px",
    textAlign: "center"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  radioChecked: {
    color: primaryColor
  },
  stackedRadio: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-5px"
    },
    marginTop: "0",
    marginBottom: "0",
  },
  imgRaised: {
    maxWidth: "100%",
    height: "320px",
    borderRadius: "6px !important",
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    float: "right",
  },
};

export default gymLabStyle;
