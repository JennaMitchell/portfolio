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
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "max-content",
  alignContent: "center",
  justifyContent: "center",
  justifySelf: "center",
  marginBottom: "40px",
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
  gap: "20px",

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
  textAlign: "center",
}));

const IconsContainer = styled("div", {
  slot: "Wrapper",
  name: "IconContainer",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "60px",
  color: theme.palette.secondary.dark,
  transition: "all 1s",
  textDecoration: "underline",
  display: "grid",
  gridTemplateColumns: "repeat(2,60px)",
  justifyContent: "center",
  gap: "30px",
}));

const StyledLink = styled("a", {
  slot: "Wrapper",
  name: "StyledLink",
})(({ theme }) => ({
  width: "max(60px,60px)",
  height: "max(60px,60px)",
  color: theme.palette.secondary.dark,
  transition: "all 1s",
  textDecoration: "underline",

  ":hover": {
    color: "red",
  },
}));

export {
  MainContainer,
  TextContainer,
  StyledTypography,
  IconsContainer,
  StyledLink,
};
