import {
  MainContainer,
  TextContainer,
  StyledTypography,
  IconsContainer,
  StyledLink,
  StyledSubTitleTypography,
} from "./contact-styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ContactSection = () => {
  return (
    <MainContainer>
      <TextContainer>
        <StyledSubTitleTypography>
          <b>Get in Touch</b>
        </StyledSubTitleTypography>
        <StyledTypography>Send me an email or give me call!</StyledTypography>
        <IconsContainer>
          <StyledLink href={"https://github.com/JennaMitchell"}>
            <GitHubIcon
              sx={{
                width: "max(60px,60px)",
                height: "max(60px,60px)",
                "@media(max-width:1500px)": {
                  height: "max(30px,30px)",
                  width: "max(30px,30px)",
                },
                "@media(max-width:400px)": {
                  height: "max(20px,20px)",
                  width: "max(20px,20px)",
                },
              }}
            />
          </StyledLink>
          <StyledLink href={"https://www.linkedin.com/in/jennaallisonmitchell"}>
            <LinkedInIcon
              sx={{
                width: "max(60px,60px)",
                height: "max(60px,60px)",
                "@media(max-width:1500px)": {
                  height: "max(30px,30px)",
                  width: "max(30px,30px)",
                },
                "@media(max-width:400px)": {
                  height: "max(20px,20px)",
                  width: "max(20px,20px)",
                },
              }}
            />
          </StyledLink>
        </IconsContainer>
      </TextContainer>
      <TextContainer>
        <StyledSubTitleTypography>
          <b>Call Me</b>
        </StyledSubTitleTypography>
        <StyledTypography>1 (248) 520-3041</StyledTypography>
        <StyledSubTitleTypography>
          <b>Email</b>
        </StyledSubTitleTypography>
        <StyledTypography>jenna.allison.mitchell@gmail.com</StyledTypography>
      </TextContainer>
    </MainContainer>
  );
};
export default ContactSection;
