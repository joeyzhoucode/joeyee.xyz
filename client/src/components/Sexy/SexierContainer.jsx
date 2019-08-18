import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { container } from "assets/jss/material-kit-react.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";

const style = {
  container,
  cardSexier: {
    margin: "60px 15px 0px !important",
    paddingBottom: "30px !important",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
};

class SexierContainer extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden cardSexier"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 400 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "cardSexier" });
      }.bind(this),
      400
    );
  }

  render() {
    const { classes, children, className, ...rest } = this.props;
    return (
      <Card className={classes[this.state.cardAnimaton]}>
        {children}
      </Card>
    );
  }
}

SexierContainer.defaultProps = {
  className: ""
};

SexierContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(style)(SexierContainer);