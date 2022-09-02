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
  backgroundPosition: "no-repeat",
  backgroundRepeat: "no-repeat",
  margin: "0",
  overflowY: "scroll",
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

  color: theme.palette.secondary.light,
  fontSize: "4.8rem",
  backgroundColor: "transparent",
  border: "4px solid white",
  transition: "all 1s",
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

  fontSize: "4.8rem",
  backgroundColor: "transparent",
  border: "4px solid white",
  justifySelf: "center",

  "&:hover": {
    border: "4px solid red",
    color: "red",
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

  padding: "40px",
  justifySelf: "center",
  alignItems: "center",

  marginBottom: "40px",
  gap: "30px",
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
