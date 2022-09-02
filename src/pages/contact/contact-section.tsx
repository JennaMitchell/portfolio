import {
  MainContainer,
  TextContainer,
  StyledTypography,
  IconsContainer,
  StyledLink,
} from "./contact-styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ContactSection = () => {
  return (
    <MainContainer>
      <TextContainer>
        <StyledTypography sx={{ fontSize: "3.8rem" }}>
          <b>Get in Touch</b>
        </StyledTypography>
        <StyledTypography>Send me an email or give me call!</StyledTypography>
        <IconsContainer>
          <StyledLink href={"https://github.com/JennaMitchell"}>
            <GitHubIcon sx={{ width: "100%", height: "100%" }} />
          </StyledLink>
          <StyledLink href={"https://www.linkedin.com/in/jennaallisonmitchell"}>
            <LinkedInIcon sx={{ width: "100%", height: "100%" }} />
          </StyledLink>
        </IconsContainer>
      </TextContainer>
      <TextContainer>
        <StyledTypography>
          <b>Call Me</b>
        </StyledTypography>
        <StyledTypography>1 (248) 520-3041</StyledTypography>
        <StyledTypography>
          <b>Email</b>
        </StyledTypography>
        <StyledTypography>jenna.allison.mitchell@gmail.com</StyledTypography>
      </TextContainer>
    </MainContainer>
  );
};
export default ContactSection;
