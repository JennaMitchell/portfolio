import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import spaceImage from "../../assets/images/space.jpg";

const MainContainer = styled("div", {
  slot: "Wrapper",
  name: "MainContainer",
})(({ theme }) => ({
  minWidth: "100vw",
  minHeight: "100vh",
  position: "relative",
  backgroundImage: `url(${spaceImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  margin: "0",

  overflowX: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const TitleSheetContainer = styled("div", {
  slot: "Wrapper",
  name: "TitleSheetContainer",
})(({ theme }) => ({
  minWidth: "100vw",
  minHeight: "100vh",
  position: "relative",

  margin: "0",
  display: "grid",
  gridTemplateColumns: "max-content",
  gridTemplateRows: "max-content max-content",
  gap: "20%",

  alignContent: "center",
  justifyContent: "center",
}));

const MenuButton = styled(Button, {
  slot: "Wrapper",
  name: "MenuButton",
})(({ theme }) => ({
  minWidth: "max-content",
  width: "max-content",
  maxWidth: "max-content",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  padding: "5px 20px",
  position: "fixed",
  top: "20px",
  right: "20px",
  transition: "all 1s",

  color: theme.palette.secondary.light,
  fontSize: "1.8rem",
  backgroundColor: "transparent",
  border: "4px solid transparent",
  "&:hover": {
    border: "4px solid white",
  },
  "@media(max-width:640px)": {
    fontSize: "1.2rem",
    top: "20px",
    right: "10px",
  },
}));

const TitleText = styled(Typography, {
  slot: "Wrapper",
  name: "TitleText",
})(({ theme }) => ({
  minWidth: "max-content",
  width: "max-content",
  maxWidth: "max-content",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  padding: "5px 20px",
  position: "relative",
  marginRight: "12px",

  color: theme.palette.secondary.light,
  fontSize: "4.8rem",
  backgroundColor: "transparent",
  border: "4px solid white",
  transition: "all 1s",
  opacity: "0",
  "@media(max-width:820px)": {
    fontSize: "4.2rem",
  },
  "@media(max-width:640px)": {
    fontSize: "3.2rem",
  },
  "@media(max-width:480px)": {
    fontSize: "2.4rem",
  },
  "@media(max-width:370px)": {
    fontSize: "2.0rem",
  },
}));

const MoveDownButton = styled("a", {
  slot: "Wrapper",
  name: "MoveDownButton",
})(() => ({
  width: "max(60px,60px)",
  height: "max(60px,60px)",
  borderRadius: "50%",
  padding: "20px",
  position: "relative",
  color: "white",
  transition: "all 1s",

  backgroundColor: "transparent",
  border: "4px solid white",
  justifySelf: "center",

  "&:hover": {
    border: "4px solid red",
    color: "red",
  },
  "@media(max-width:820px)": {
    width: "max(40px,40px)",
    height: "max(40px,40px)",
  },
  "@media(max-width:640px)": {
    width: "max(30px,30px)",
    height: "max(30px,30px)",
  },
  "@media(max-width:370px)": {
    padding: "15px",
  },
}));

const ContentContainer = styled("div", {
  slot: "Wrapper",
  name: "ContentContainer ",
})(({ theme }) => ({
  minWidth: "85vw",
  width: "85vw",
  maxWidth: "85vw",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  position: "relative",
  backgroundColor: "rgb(255,255,255,0.99)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  marginRight: "10px",
  padding: "40px",
  justifySelf: "center",
  alignItems: "center",
  boxSizing: "border-box",

  marginBottom: "40px",
  gap: "30px",
  "@media(max-width:1550px)": {
    minWidth: "90vw",
    width: "90vw",
    maxWidth: "90vw",
  },
  "@media(max-width:500px)": {
    padding: "10px",
    marginLeft: "0px",
    marginRight: "12.5px",
  },
}));

const SectionTitle = styled(Typography, {
  slot: "Wrapper",
  name: "Title",
})(({ theme }) => ({
  minWidth: "max-content",
  width: "max-content",
  maxWidth: "max-content",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  fontSize: "5.6rem",
  position: "relative",
  textAlign: "center",
  justifySelf: "center",
  "@media(max-width:1500px)": {
    fontSize: "4.8rem",
  },
  "@media(max-width:820px)": {
    fontSize: "3.2rem",
  },
}));

export {
  MainContainer,
  MenuButton,
  TitleText,
  MoveDownButton,
  TitleSheetContainer,
  ContentContainer,
  SectionTitle,
};
