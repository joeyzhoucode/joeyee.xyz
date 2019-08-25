const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};

const defaultFont = {
  fontFamily: '"Roboto"',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const primaryColor = "#9aa6ce";
const primaryVariantColor = "#1a3e92";
const secondaryColor = "#9dd9c1";
const secondaryVariantColor = "#009468";
const backgroundColor = "#121212";
const surfaceColor = "#121212";
const errorColor = "#c94278";
const onPrimaryColor = "#000000";
const onSecondaryColor = "#000000";
const onBackgroundColor = "#FFFFFF";
const onSurfaceColor = "#FFFFFF";
const onErrorColor = "#000000";

const primary50 = "#e7e9f3";
const primary100 = "#c2c9e2";
const primary200 = "#9aa6ce";
const primary300 = "#7284bc";
const primary400 = "#5169b2";
const primary500 = "#2b50a7";
const primary600 = "#25489e";
const primary700 = "#1a3e92";
const primary800 = "#0e3587";
const primary900 = "#002473";

const secondary50 = "#e6f6f0";
const secondary100 = "#c3e8d9";
const secondary200 = "#9dd9c1";
const secondary300 = "#70cca8";
const secondary400 = "#45c195";
const secondary500 = "#00b682";
const secondary600 = "#00a776";
const secondary700 = "#009468";
const secondary800 = "#00835b";
const secondary900 = "#006343";

const elevation00 = { 
  backgroundColor: "#121212",
  boxShadow: "none"
};
const elevation01 = { 
  backgroundColor: "#1d1d1d",
  boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)"
};
const elevation02 = { 
  backgroundColor: "#212121",
  boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)"
};
const elevation03 = { 
  backgroundColor: "#242424",
  boxShadow: "0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)"
};
const elevation04 = { 
  backgroundColor: "#262626",
  boxShadow: "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)"
};
const elevation06 = { 
  backgroundColor: "#2c2c2c",
  boxShadow: "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)"
};
const elevation08 = { 
  backgroundColor: "#2d2d2d",
  boxShadow: "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)"
};
const elevation12 = { 
  backgroundColor: "#323232",
  boxShadow: "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)"
};
const elevation16 = { 
  backgroundColor: "#353535",
  boxShadow: "0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20)"
};
const elevation24 = { 
  backgroundColor: "#373737",
  boxShadow: "0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)"
};

const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};

const title = {
  color: "#bdbdbd",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Roboto"`
};

const cardTitle = {
  ...title,
  marginTop: ".625rem"
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};

export {
  drawerWidth,
  transition,
  container,
  containerFluid,
  card,
  defaultFont,
  primaryColor,
  primaryVariantColor,
  secondaryColor,
  secondaryVariantColor,
  backgroundColor,
  surfaceColor,
  errorColor,
  onPrimaryColor,
  onSecondaryColor,
  onBackgroundColor,
  onSurfaceColor,
  onErrorColor,
  primary50,
  primary100,
  primary200,
  primary300,
  primary400,
  primary500,
  primary600,
  primary700,
  primary800,
  primary900,
  secondary50,
  secondary100,
  secondary200,
  secondary300,
  secondary400,
  secondary500,
  secondary600,
  secondary700,
  secondary800,
  secondary900,
  elevation00,
  elevation01,
  elevation02,
  elevation03,
  elevation04,
  elevation06,
  elevation08,
  elevation12,
  elevation16,
  elevation24,
  primaryCardHeader,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle
};
