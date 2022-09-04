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
  "@media(max-width:820px)": {
    fontSize: "1.2rem",
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
  textAlign: "center",
}));

const IconsContainer = styled("div", {
  slot: "Wrapper",
  name: "IconContainer",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(50px,50px)",
  color: theme.palette.secondary.dark,
  transition: "all 1s",
  textDecoration: "underline",
  display: "grid",
  gridTemplateColumns: "repeat(2,60px)",
  justifyContent: "center",
  gap: "30px",
  "@media(max-width:1500px)": {
    height: "max(30px,30px)",
    gridTemplateColumns: "repeat(2,30px)",
    gap: "15px",
  },
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
const StyledSubTitleTypography = styled(Typography, {
  slot: "Wrapper",
  name: "StyledTypography",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  color: theme.palette.secondary.dark,
  fontSize: "3.2rem",
  textAlign: "center",
  "@media(max-width:1500px)": {
    fontSize: "2.2rem",
  },
  "@media(max-width:820px)": {
    fontSize: "1.8rem",
  },
}));

export {
  MainContainer,
  TextContainer,
  StyledTypography,
  IconsContainer,
  StyledLink,
  StyledSubTitleTypography,
};
