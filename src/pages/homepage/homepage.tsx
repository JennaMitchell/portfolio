import {
  MainContainer,
  MenuButton,
  TitleText,
  MoveDownButton,
  TitleSheetContainer,
  ContentContainer,
  SectionTitle,
} from "./homepage-styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import AboutMeSection from "../about-me/about-me-section";
import ProjectSection from "../projects/projects";
import ContactSection from "../contact/contact-section";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MenuContainer from "../../nav/menu-container";

const Homepage = () => {
  const [initialLoad, setInitialLoad] = useState(false);
  const [menuButtonActive, setMenuActive] = useState(false);

  function menuButtonHandler() {
    setMenuActive(!menuButtonActive);
  }

  useEffect(() => {
    setInitialLoad(true);
  }, []);

  return (
    <>
      <MainContainer>
        <MenuContainer
          menuButtonHandler={menuButtonHandler}
          menuButtonActive={menuButtonActive}
        />
        <TitleSheetContainer>
          <MenuButton
            startIcon={<MenuIcon />}
            sx={{
              marginTop: `${initialLoad ? "0px" : "80px"}`,
            }}
            onClick={menuButtonHandler}
          >
            Menu
          </MenuButton>
          <TitleText sx={{ marginTop: `${initialLoad ? "0px" : "80px"}` }}>
            Jenna Mitchell's Portfolio
          </TitleText>
          <MoveDownButton
            sx={{ marginTop: `${initialLoad ? "0px" : "80px"}` }}
            href={"#ContentContainer"}
          >
            <ArrowDownwardIcon sx={{ width: "100%", height: "100%" }} />
          </MoveDownButton>
        </TitleSheetContainer>
        <ContentContainer id="ContentContainer">
          <SectionTitle>About Me</SectionTitle>
          <AboutMeSection />
          <SectionTitle>Projects</SectionTitle>
          <ProjectSection />
          <SectionTitle>Contact</SectionTitle>
          <ContactSection />
        </ContentContainer>
      </MainContainer>
    </>
  );
};
export default Homepage;
