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
import { useMediaQuery } from "@mui/material";

const Homepage = () => {
  const [initialLoad, setInitialLoad] = useState(false);
  const [menuButtonActive, setMenuActive] = useState(false);
  const [solidMenuButtonActive, setSolidMenuButtonActive] = useState(false);
  const titleMenuButtonHoverEffectiveActive =
    useMediaQuery("(max-width:940px)");
  useEffect(() => {
    setInitialLoad(true);
  }, []);
  // used to cause the title text to move up on page load

  function menuButtonHandler() {
    setMenuActive(!menuButtonActive);
  }

  useEffect(() => {
    const scrollHandler = () => {
      const titleQuery = document.querySelector("#TitleText");
      const menuButtonQuery = document.querySelector("#MenuButton");
      const contentContainerQuery = document.querySelector("#ContentContainer");
      //
      const titleStartPosition = titleQuery?.getClientRects()[0].y || 0;
      // titleStartPosition is the position of the start of the Title Text relative to the top of the viewport
      // when its zero it is flush with the top of the viewport
      const titleBottomPosition = titleQuery?.getClientRects()[0].bottom || 0;
      // titleBottomPosition is the bottom of the TitleText container realtive to the top of the viewport
      //  so to make the button work we take the menuButtons Height

      const contentContainerStartPosition =
        contentContainerQuery?.getClientRects()[0].y || 0;

      const menuButtonBottomPosition =
        menuButtonQuery?.getClientRects()[0].bottom || 0;
      // menuButtonBottomPosition never changes since the button is positioned fixed

      // const titleHeightStart = titleYPosition - titleHeight;

      // handeling if the button is over the title text
      if (titleMenuButtonHoverEffectiveActive) {
        if (
          titleStartPosition > menuButtonBottomPosition &&
          solidMenuButtonActive
        ) {
          setSolidMenuButtonActive(false);
        }

        if (
          titleStartPosition <= menuButtonBottomPosition &&
          titleBottomPosition >= menuButtonBottomPosition &&
          !solidMenuButtonActive
        ) {
          setSolidMenuButtonActive(true);
        }

        if (
          contentContainerStartPosition > menuButtonBottomPosition &&
          solidMenuButtonActive &&
          titleBottomPosition < 0 + menuButtonBottomPosition / 2
        ) {
          setSolidMenuButtonActive(false);
        }

        // using window.innerheihght since the title slide is 100vh so we don;t need to get's height
        if (
          contentContainerStartPosition <= menuButtonBottomPosition &&
          !solidMenuButtonActive
        ) {
          setSolidMenuButtonActive(true);
        }
      } else {
        if (
          contentContainerStartPosition > menuButtonBottomPosition &&
          solidMenuButtonActive &&
          titleBottomPosition < 0 + menuButtonBottomPosition / 2
        ) {
          setSolidMenuButtonActive(false);
        }

        // using window.innerheihght since the title slide is 100vh so we don;t need to get's height
        if (
          contentContainerStartPosition <= menuButtonBottomPosition &&
          !solidMenuButtonActive
        ) {
          setSolidMenuButtonActive(true);
        }
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [solidMenuButtonActive, titleMenuButtonHoverEffectiveActive]);

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
              backgroundColor: `${
                solidMenuButtonActive ? "primary.main" : "transparent"
              }`,
              zIndex: `${solidMenuButtonActive ? "3" : "1"}`,
              opacity: `${initialLoad ? "1" : "0"}`,
              "&:hover": {
                backgroundColor: `${solidMenuButtonActive && "primary.light"}`,
                borderColor: `${solidMenuButtonActive && "transparent"}`,
                boxShadow: `${solidMenuButtonActive && "0 0 10px black"}`,
              },
            }}
            onClick={menuButtonHandler}
            id={"MenuButton"}
          >
            Menu
          </MenuButton>
          <TitleText
            sx={{
              marginTop: `${initialLoad ? "0px" : "180px"}`,
              opacity: `${initialLoad ? "1" : "0"}`,
            }}
            id={"TitleText"}
          >
            Jenna Mitchell's Portfolio
          </TitleText>
          <MoveDownButton
            sx={{
              marginTop: `${initialLoad ? "0px" : "80px"}`,
              opacity: `${initialLoad ? "1" : "0"}`,
            }}
            href={"#ContentContainer"}
          >
            <ArrowDownwardIcon
              sx={{
                width: "60px",
                height: "60px",
                "@media(max-width:820px)": {
                  width: "max(40px,40px)",
                  height: "max(40px,40px)",
                },
                "@media(max-width:640px)": {
                  width: "max(30px,30px)",
                  height: "max(30px,30px)",
                },
              }}
            />
          </MoveDownButton>
        </TitleSheetContainer>
        <ContentContainer id="ContentContainer">
          <SectionTitle id="AboutMe">About Me</SectionTitle>
          <AboutMeSection />
          <SectionTitle id="Projects">Projects</SectionTitle>
          <ProjectSection />
          <SectionTitle id="Contact">Contact</SectionTitle>
          <ContactSection />
        </ContentContainer>
      </MainContainer>
    </>
  );
};
export default Homepage;
