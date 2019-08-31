import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigatorActions from "actions/navigatorActions";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import { Email, People } from "@material-ui/icons/";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardAnimated from "components/Card/CardAnimated.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginStyle from "assets/jss/containers/loginStyle.jsx";

class LoginPage extends React.Component {
  render() {
    const { classes, redirecting } = this.props;

    const classicSignIn = redirecting ? (
      <CircularProgress className={classes.progress} size={80} />
      ) : (
      <div>
        <CardBody>
          <CustomInput
            labelText="First Name..."
            id="first"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "text",
              endAdornment: (
                <InputAdornment position="end">
                  <People className={classes.inputIconsColor} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            labelText="Email..."
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "email",
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputIconsColor} />
                </InputAdornment>
              )
            }}
          />
          <CustomInput
            labelText="Password"
            id="pass"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              type: "password",
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputIconsColor}>
                    lock_outline
                  </Icon>
                </InputAdornment>
              ),
              autoComplete: "off"
            }}
          />
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button simple color="primary" size="lg" disabled>
            Sign In
          </Button>
        </CardFooter>
      </div>
    )

    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <CardAnimated>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login</h4>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="/auth/google_oauth2"
                      color="transparent"
                    >
                      <i className={"fab fa-google"} />
                    </Button>
                    <Button
                      justIcon
                      href="/auth/facebook"
                      color="transparent"
                      disabled
                    >
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Button
                      justIcon
                      href="/auth/github"
                      color="transparent"
                      disabled
                    >
                      <i className={"fab fa-github"} />
                    </Button>
                  </div>
                </CardHeader>
                { classicSignIn }
              </form>
            </CardAnimated>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  redirecting: true
};

LoginPage.propTypes = {
  classes: PropTypes.object,
  redirecting: PropTypes.bool,
};

function mapStateToProps(state) {
  return state.navigator;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(navigatorActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginStyle)(LoginPage));
