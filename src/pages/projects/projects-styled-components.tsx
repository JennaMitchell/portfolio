import { styled, Typography } from "@mui/material";
const MainContainer = styled("div", {
  slot: "Wrapper",
  name: "MainContainer",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max-content",
  position: "relative",
  color: theme.palette.secondary.light,
  fontSize: "4.8rem",
  backgroundColor: "transparent",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridTemplateRows: "max-content max-content",
  alignContent: "center",
  justifyContent: "center",
  justifySelf: "center",
  paddingBottom: "120px",
}));

const ImageContainer = styled("div", {
  slot: "Wrapper",
  name: "ImageContainer",
})(({ theme }) => ({
  width: "max(45%,45%)",
  height: "max(80%,80%)",

  position: "absolute",
  transition: "scale 0.5s",
  objectFit: "cover",
  justifySelf: "center",
  backgroundSize: "cover",
  objectPosition: "center",

  zIndex: "1",
  "&:hover": {
    scale: "1.4",
    border: "4px solid red",
    zIndex: "3",
  },
}));

const TextContainer = styled("div", {
  slot: "Wrapper",
  name: "TextContainer",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  position: "relative",
  color: theme.palette.secondary.light,
  fontSize: "2.2rem",
  backgroundColor: "transparent",
  transition: "all 0.5s",
  objectFit: "cover",
  borderRadius: "50%",
  display: "flex",
  flexDirection: "column",

  alignSelf: "center",
}));

const StyledTypography = styled(Typography, {
  slot: "Wrapper",
  name: "StyledTypography",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  color: theme.palette.secondary.dark,
  fontSize: "inherit",
}));

const StyledLink = styled("a", {
  slot: "Wrapper",
  name: "StyledLink",
})(({ theme }) => ({
  minWidth: "max-content",
  width: "max-content",
  maxWidth: "max-content",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  color: theme.palette.secondary.dark,
  transition: "all 1s",
  textDecoration: "underline",

  "&:hover": {
    color: "red",
  },
}));

const ImageStackContainer = styled("div", {
  slot: "Wrapper",
  name: "ImageStackContainer",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  color: theme.palette.secondary.dark,
  transition: "scale 1s",
  textDecoration: "none",
  display: "flex",
  gap: "0",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));

const CustomTooltip = styled("div", {
  slot: "Wrapper",
  name: "CustomTooltip",
})(({ theme }) => ({
  minWidth: "max-content",
  width: "max-content",
  maxWidth: "max-content",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  color: theme.palette.secondary.light,
  backgroundColor: theme.palette.secondary.main,

  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "1.2rem",
  lineHeight: "1.2rem",

  position: "absolute",
  top: "-35px",
  left: "50%",
  translate: "-50% 0%",
  opacity: "0",
}));

const DownArrow = styled("div", {
  slot: "Wrapper",
  name: "DownArrow",
})(({ theme }) => ({
  width: "0",
  height: "0",
  borderLeft: "7.5px solid transparent",
  borderRight: "7.5px solid transparent",
  borderTop: "7.5px solid grey",
  borderTopColor: theme.palette.secondary.main,
  position: "absolute",
  top: "88%",
  left: "50%",
  translate: "-50% 0%",
}));
export {
  MainContainer,
  ImageContainer,
  TextContainer,
  StyledTypography,
  StyledLink,
  ImageStackContainer,
  CustomTooltip,
  DownArrow,
};
