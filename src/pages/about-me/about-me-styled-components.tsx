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
  gridTemplateColumns: "max-content max-content",
  gridTemplateRows: "max-content max-content",
  alignItems: "center",
  justifyContent: "center",
  justifySelf: "center",
  gap: "20px",
}));

const ImageContainer = styled("img", {
  slot: "Wrapper",
  name: "ImageContainer",
})(({ theme }) => ({
  width: "max(350px,350px)",
  height: "max(350px,350px)",
  display: "inline-block",
  position: "relative",
  color: theme.palette.secondary.light,

  transition: "all 0.5s",
  objectFit: "cover",
  borderRadius: "50%",

  justifySelf: "center",
  opacity: "0",
  "@media(max-width:1000px)": {
    width: "max(250px,250px)",
    height: "max(250px,250px)",
  },
  "@media(max-width:820px)": {
    width: "max(150px,150px)",
    height: "max(150px,150px)",
  },
  "@media(max-width:650px)": {
    display: "none",
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
  marginTop: "0px",
  opacity: "0",
  "@media(max-width:1500px)": {
    fontSize: "1.6rem",
  },
  "@media(max-width:820px)": {
    fontSize: "1.2rem",
  },
  "@media(max-width:650px)": {
    gridColumn: "1/span 2",
  },
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

const StyledSubTitleTypography = styled(Typography, {
  slot: "Wrapper",
  name: "StyledTypography",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  color: theme.palette.secondary.dark,
  fontSize: "3.2rem",
  "@media(max-width:1500px)": {
    fontSize: "2.2rem",
  },
  "@media(max-width:820px)": {
    fontSize: "1.8rem",
  },
  "@media(max-width:500px)": {
    fontSize: "1.6rem",
  },
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

  gridTemplateRows: "40px",
  justifyContent: "space-around",
  justifyItems: "center",
  alignItems: "center",
  gridColumn: "1 /span 2",
  gridRow: "1/span 1",
  marginBottom: "20px",
}));
const SelectionButton = styled("button", {
  slot: "Wrapper",
  name: "SelectionButton",
})(({ theme }) => ({
  minWidth: "max-content",
  width: "max-content",
  maxWidth: "max-content",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  color: theme.palette.secondary.light,
  padding: "10px 20px",
  borderRadius: "10px",
  boxShadow: " 0 0 10px black",

  backgroundColor: theme.palette.primary.main,

  transition: "all 1s",
  fontSize: "2.6rem",
  border: "none",
  textAlign: "center",
  marginBottom: "20px",
  marginTop: "20px",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  "@media(max-width:1500px)": {
    fontSize: "2.2rem",
  },
  "@media(max-width:820px)": {
    fontSize: "1.8rem",
  },
  "@media(max-width:740px)": {
    fontSize: "1.6rem",
  },
  "@media(max-width:700px)": {
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  },
  "@media(max-width:640px)": {
    width: "max(100px,100px)",
  },
  "@media(max-width:380px)": {
    width: "max(90px,90px)",
  },
}));

const StyledUnorderedList = styled("ul", {
  slot: "Wrapper",
  name: "StyledUnorderedList",
})(({ theme }) => ({
  minWidth: "100%",
  width: "100%",
  maxWidth: "100%",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  marginTop: "10px",
  display: "inline-block",
}));
const StyledListItem = styled("li", {
  slot: "Wrapper",
  name: "StyledListItem",
})(({ theme }) => ({
  minWidth: "calc(100% - 40px)",
  width: "calc(100% - 40px)",
  maxWidth: "calc(100% - 40px)",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  color: theme.palette.secondary.dark,
  "@media(max-width:500px)": {
    marginLeft: "0px",
  },
}));

const StackedTitleTypography = styled(Typography, {
  slot: "Wrapper",
  name: "StackedTitleTypography",
})(({ theme }) => ({
  minWidth: "max-content",
  width: "max-content",
  maxWidth: "max-content",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  textDecoration: "inherit",
  fontSize: "1.6rem",
  color: theme.palette.secondary.dark,
  "@media(max-width:500px)": {
    fontSize: "1.4rem",
  },
}));

export {
  MainContainer,
  ImageContainer,
  TextContainer,
  StyledTypography,
  SectionButtonsContainer,
  SelectionButton,
  StyledUnorderedList,
  StyledListItem,
  StyledSubTitleTypography,
  StackedTitleTypography,
};
