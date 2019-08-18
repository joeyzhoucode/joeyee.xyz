import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core components
import { container } from "assets/jss/material-kit-react.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";

const style = {
  container,
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  main: {
    zIndex: "3",
    margin: "-60px 15px 0px",
  },
};

class SexyContainer extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      400
    );
  }

  render() {
    const { classes, children, className, ...rest } = this.props;
    return (
      <Card className={classes[this.state.cardAnimaton] + " " + classNames(classes.main)}>
        {children}
      </Card>
    );
  }
}

SexyContainer.defaultProps = {
  className: ""
};

SexyContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(style)(SexyContainer);