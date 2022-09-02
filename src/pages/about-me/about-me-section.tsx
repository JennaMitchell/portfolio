import circuitBoard from "../../assets/images/electrical-board.jpg";
import dungeonsDragons from "../../assets/images/dungeons-dragons.jpg";
import code from "../../assets/images/coding.jpg";
import { useEffect, useState } from "react";
import {
  MainContainer,
  ImageContainer,
  TextContainer,
  StyledTypography,
  SectionButtonsContainer,
  ActiveSectionButton,
  StyledUnorderedList,
  StyledListItem,
} from "./about-me-styled-components";
const AboutMeSection = () => {
  const sectionButtons = ["Coding Experience", "Job Experience", "Fun Stuff"];
  const [activeSectionButton, setActiveSectionButton] =
    useState("Coding Experience");

  const [nextActiveButton, setNextActiveButton] = useState("");
  const [fadeIn, setFadeIn] = useState(true);
  const [previousActiveButton, setPreviousActiveButton] = useState("");
  useEffect(() => {
    if (!fadeIn && previousActiveButton.length === 0) {
      setTimeout(() => {
        setActiveSectionButton(nextActiveButton);
        setNextActiveButton("");
        setPreviousActiveButton(activeSectionButton);
      }, 500);

      // waiting 1s for the fade out animation to play
    }

    if (previousActiveButton.length !== 0) {
      // rerender with new buttons then fade it in
      setPreviousActiveButton("");
      setFadeIn(true);
    }
  }, [
    fadeIn,
    activeSectionButton,
    nextActiveButton,
    previousActiveButton.length,
  ]);

  const renderReadySectionButtons = sectionButtons.map((title: string) => {
    const buttonHandler = () => {
      setNextActiveButton(title);
      setFadeIn(false);
    };

    if (title === activeSectionButton) {
      return (
        <ActiveSectionButton key={title}>
          &nbsp; {title} &nbsp;
        </ActiveSectionButton>
      );
    } else {
      return (
        <ActiveSectionButton
          key={title}
          sx={{
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={buttonHandler}
        >
          &nbsp;
          {title}&nbsp;
        </ActiveSectionButton>
      );
    }
  });

  const renderReadyCodingBlock = (
    <>
      <TextContainer sx={{ opacity: `${fadeIn ? "1" : "0"}` }}>
        <StyledTypography sx={{ fontSize: "3.2rem" }}>
          <b>Coding Experience</b>
        </StyledTypography>
        <StyledTypography>
          I've spent the last year and half teaching myself how to code frontend
          applications. I accomplished this by completing multiple Udemy Courses
          and countless Youtube videos. Below is a list of coding languages,
          libraries and software I'm knowledgable on.
        </StyledTypography>
        <StyledTypography sx={{ marginTop: "20px" }}>
          <b>Coding Languages:</b> React, Typescript, Javascript, HTML, SaSS,
          CSS, Git, and SQL
        </StyledTypography>
        <StyledTypography sx={{ marginTop: "20px" }}>
          <b>Coding Libraries:</b> Material UI, Chakra, React Redux, Firebase
          and React DnD
        </StyledTypography>
        <StyledTypography sx={{ marginTop: "20px" }}>
          <b>Software:</b> MacOS, Windows OS, Microsoft Office, Adobe
          Illustator, and Blender
        </StyledTypography>
      </TextContainer>
      <ImageContainer
        src={code}
        alt="code on a laptop"
        sx={{ opacity: `${fadeIn ? 1 : 0}` }}
      />
    </>
  );

  const renderReadyJobExperience = (
    <>
      <ImageContainer
        src={circuitBoard}
        alt="circuit board"
        sx={{ opacity: `${fadeIn ? 1 : 0}` }}
      />
      <TextContainer sx={{ opacity: `${fadeIn ? 1 : 0}`, gap: "0" }}>
        <StyledTypography sx={{ fontSize: "3.2rem" }}>
          <b>Continous Improvement Engineer</b>
        </StyledTypography>
        <StyledTypography>Job Duties Included:</StyledTypography>
        <StyledUnorderedList>
          <StyledListItem>
            <StyledTypography>
              Coordinated customer and electrical supplier improvement projects
            </StyledTypography>
          </StyledListItem>
          <StyledListItem>
            <StyledTypography>
              Collaberated with the factory and product returns team to find
              future safety improvements
            </StyledTypography>
          </StyledListItem>
          <StyledListItem>
            <StyledTypography>
              Presented key product improvements to engineering review board for
              approval
            </StyledTypography>
          </StyledListItem>
          <StyledListItem>
            <StyledTypography>
              Updated and maintained key engineering documentation
            </StyledTypography>
          </StyledListItem>
        </StyledUnorderedList>
      </TextContainer>
    </>
  );

  const renderReadyFunStuff = (
    <>
      <TextContainer sx={{ opacity: `${fadeIn ? 1 : 0}`, gap: "0" }}>
        <StyledTypography sx={{ fontSize: "3.2rem" }}>
          <b>Avid Language Learner</b>
        </StyledTypography>
        <StyledTypography>
          I'm a constant learner who loves to learn about other cultures and
          languages. I am currently studying for the French Exam.
        </StyledTypography>
        <StyledTypography sx={{ fontSize: "3.2rem", marginTop: "20px" }}>
          <b>Dungeons and Dragons DM</b>
        </StyledTypography>
        <StyledTypography>
          I'm a huge nerd, who loves to DM for anyone who wants to play. I've
          DMed the Strom Kings Thunder and Lost Mines of Phandelver
        </StyledTypography>
        <StyledTypography sx={{ fontSize: "3.2rem", marginTop: "20px" }}>
          <b>Puzzle Dungeon</b>
        </StyledTypography>
        <StyledTypography>
          I'm currently working on creating a multi-user Dungeons and Dragons
          inspired puzzle application. That allows DMs and players to solve
          dungeon puzzles together live.
        </StyledTypography>
      </TextContainer>
      <ImageContainer
        src={dungeonsDragons}
        alt="dungeons and dragons board"
        sx={{ opacity: `${fadeIn ? 1 : 0}` }}
      />
    </>
  );

  return (
    <MainContainer
      sx={{
        gridTemplateColumns: `${
          activeSectionButton === "Job Experience" ? "1fr 2fr" : "2fr 1fr"
        } `,
      }}
    >
      <SectionButtonsContainer>
        {renderReadySectionButtons}
      </SectionButtonsContainer>
      {activeSectionButton === "Coding Experience" && renderReadyCodingBlock}
      {activeSectionButton === "Job Experience" && renderReadyJobExperience}
      {activeSectionButton === "Fun Stuff" && renderReadyFunStuff}
    </MainContainer>
  );
};
export default AboutMeSection;