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
  gridTemplateRows: "max-content 400px",
  alignItems: "center",
  justifyContent: "center",
  justifySelf: "center",
}));

const ImageContainer = styled("img", {
  slot: "Wrapper",
  name: "ImageContainer",
})(({ theme }) => ({
  width: "max(70%,70%)",
  height: "max(90%,90%)",
  display: "inline-block",
  position: "relative",
  color: theme.palette.secondary.light,

  transition: "all 0.5s",
  objectFit: "cover",
  borderRadius: "50%",

  justifySelf: "center",
  opacity: "0",
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
  marginTop: "0px",
  opacity: "0",
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

const SectionButtonsContainer = styled("div", {
  slot: "Wrapper",
  name: "SectionButtonsContainer",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(40px,40px)",
  color: theme.palette.secondary.dark,
  fontSize: "inherit",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  columnGap: "100px",
  gridTemplateRows: "40px",
  justifyContent: "space-around",
  justifyItems: "center",
  alignItems: "center",
  gridColumn: "1 /span 2",
  gridRow: "1/span 1",
}));
const ActiveSectionButton = styled("button", {
  slot: "Wrapper",
  name: "ActiveSectionButton",
})(({ theme }) => ({
  minWidth: "max-content",
  width: "max-content",
  maxWidth: "max-content",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  color: theme.palette.secondary.dark,
  padding: "10px 20px",
  backgroundColor: "transparent",
  textDecoration: "underline",
  transition: "all 1s",
  fontSize: "2.6rem",
  border: "none",
  textAlign: "center",
}));

const StyledUnorderedList = styled("ul", {
  slot: "Wrapper",
  name: "StyledUnorderedList",
})(({ theme }) => ({
  minWidth: "max-content",
  width: "max-content",
  maxWidth: "max-content",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  marginTop: "10px",
}));
const StyledListItem = styled("li", {
  slot: "Wrapper",
  name: "StyledListItem",
})(({ theme }) => ({
  minWidth: "100%",
  width: "100%",
  maxWidth: "100%",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  color: theme.palette.secondary.dark,
}));

export {
  MainContainer,
  ImageContainer,
  TextContainer,
  StyledTypography,
  SectionButtonsContainer,
  ActiveSectionButton,
  StyledUnorderedList,
  StyledListItem,
};
