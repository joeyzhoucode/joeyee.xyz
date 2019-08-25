import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";

const style = {
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
};

class CardAnimated extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimation: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 400 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimation: "" });
      }.bind(this),
      400
    );
  }

  render() {
    const { classes, parallax, children } = this.props;
    return (
      <Card className={classes[this.state.cardAnimation]} parallax={parallax}>
        {children}
      </Card>
    );
  }
}

CardAnimated.defaultProps = {
  className: "",
  parallax: false,
};

CardAnimated.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  parallax: PropTypes.bool,
};

export default withStyles(style)(CardAnimated);