import { 
  elevation01,
  onSurfaceColor,
} from "assets/jss/globalStyles.jsx";

const cardStyle = {
  card: {
    margin: "75px 15px 15px",
    borderRadius: "6px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    color: onSurfaceColor,
    paddingBottom: "15px",
    ...elevation01
  },
  cardParallax: {
    margin: "-60px 15px 20px !important",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  }
};

export default cardStyle;
