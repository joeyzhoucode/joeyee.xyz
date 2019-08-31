import React from "react";
import PropTypes from "prop-types";

import Card from "components/Card/Card.jsx";

import withStyles from "@material-ui/core/styles/withStyles";

const style = {
  cardAnimation: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
};

class CardAnimated extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animatedStyle: "cardAnimation" };
  }
  componentDidMount() {
    setTimeout(
      function() { this.setState({ animatedStyle: "" }); }.bind(this),
      400
    );
  }

  render() {
    const { classes, parallax, children } = this.props;
    return (
      <Card className={classes[this.state.animatedStyle]} parallax={parallax}>
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