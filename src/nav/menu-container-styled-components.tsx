import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const MainContainer = styled("div", {
  slot: "Wrapper",
  name: "MainContainer",
})(({ theme }) => ({
  width: "max(400px,400px)",
  height: "max(100vh,100vh)",
  position: "fixed",
  top: "0px",
  right: "-400px",
  color: theme.palette.secondary.dark,
  backgroundColor: theme.palette.secondary.light,
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "repeat(3,40px)",
  alignContent: "flex-start",
  justifyItems: "center",
  paddingTop: "80px",
  zIndex: "5",
  transition: "all 1s",

  gap: "40px",
  "@media(max-width:400px)": {
    width: "max(100vw,100vw)",
    right: "-100vw",
  },
}));

const ButtonLink = styled("button", {
  slot: "Wrapper",
  name: "MainContainer",
})(({ theme }) => ({
  width: "max(80%,80%)",
  height: "max(100%,100%)",
  position: "relative",
  color: theme.palette.secondary.dark,
  fontSize: "2.6rem",
  textDecoration: "none",
  border: "none",
  borderBottom: "1px solid grey",
  backgroundColor: "transparent",
  textAlign: "start",

  display: "inline-block",
  transition: "all 1s",
  ":hover": {
    color: "red",
    borderBottom: "1px solid red",
  },
}));

const ClosingIcon = styled(CloseIcon, {
  slot: "Wrapper",
  name: "ClosingIcon",
})(({ theme }) => ({
  width: "max(40px,40px)",
  height: "max(40px,40px)",
  position: "absolute",
  top: "20px",
  right: "20px",
  color: theme.palette.secondary.main,
  transition: "all 1s",
  "&:hover": {
    color: "red",
  },
}));

export { MainContainer, ButtonLink, ClosingIcon };
