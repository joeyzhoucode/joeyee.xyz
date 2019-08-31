import {
  surfaceColor,
  onSurfaceColor,
  primaryColor,
  secondaryColor,
  primaryVariantColor,
  secondaryVariantColor,
  errorColor
} from "assets/jss/globalStyles.jsx";

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: surfaceColor,
    color: onSurfaceColor,
    boxShadow:
      "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 1px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: onSurfaceColor,
      backgroundColor: surfaceColor,
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 2px 5px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: primaryColor,
    boxShadow:
      "0 1px 1px -2px " + primaryColor,
    "&:hover,&:focus": {
      backgroundColor: primaryColor,
      boxShadow:
        "0 2px 5px 0px " + primaryColor
    }
  },
  secondary: {
    backgroundColor: secondaryColor,
    boxShadow:
      "0 1px 1px -2px " + secondaryColor,
    "&:hover,&:focus": {
      backgroundColor: secondaryColor,
      boxShadow:
        "0 2px 5px 0px " + secondaryColor,
    }
  },
  primaryVariant: {
    backgroundColor: primaryVariantColor,
    boxShadow:
      "0 1px 1px -2px " + primaryVariantColor,
    "&:hover,&:focus": {
      backgroundColor: primaryVariantColor,
      boxShadow:
        "0 2px 5px 0px " + primaryVariantColor
    }
  },
  secondaryVariant: {
    backgroundColor: secondaryVariantColor,
    boxShadow:
      "0 1px 1px -2px " + secondaryVariantColor,
    "&:hover,&:focus": {
      backgroundColor: secondaryVariantColor,
      boxShadow:
        "0 2px 5px 0px " + secondaryVariantColor
    }
  },
  error: {
    backgroundColor: errorColor,
    boxShadow:
      "0 1px 1px -2px " + errorColor,
    "&:hover,&:focus": {
      backgroundColor: errorColor,
      boxShadow:
        "0 2px 5px 0px " + errorColor
    }
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: onSurfaceColor,
      color: surfaceColor
    }
  },
  simple: {
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: primaryColor
      }
    },
    "&$secondary": {
      "&,&:focus,&:hover,&:visited": {
        color: secondaryColor
      }
    },
    "&$primaryVariant": {
      "&,&:focus,&:hover,&:visited": {
        color: primaryVariantColor
      }
    },
    "&$secondaryVariant": {
      "&,&:focus,&:hover,&:visited": {
        color: secondaryVariantColor
      }
    },
    "&$error": {
      "&,&:focus,&:hover,&:visited": {
        color: errorColor
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: onSurfaceColor,
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};

export default buttonStyle;
