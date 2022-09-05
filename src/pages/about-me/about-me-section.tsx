import circuitBoard from "../../assets/images/electrical-board.jpg";
import dungeonsDragons from "../../assets/images/dungeons-dragons.jpg";
import code from "../../assets/images/coding.jpg";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import {
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
} from "./about-me-styled-components";
const AboutMeSection = () => {
  const sectionButtonTitles = [
    "Coding Experience",
    "Job Experience",
    "Fun Stuff",
  ];
  const sectionStackedButtonTitles = [
    ["Coding", "Experience"],
    ["Job", "Experience"],
    ["Fun", "Stuff"],
  ];
  const stackButtonsActive = useMediaQuery("(max-width:700px)");
  const [activeSelectionButton, setActiveSelectionButton] =
    useState("Coding Experience");

  const [nextActiveButton, setNextActiveButton] = useState("");
  const [fadeIn, setFadeIn] = useState(true);
  const [previousActiveButton, setPreviousActiveButton] = useState("");
  useEffect(() => {
    if (!fadeIn && previousActiveButton.length === 0) {
      setTimeout(() => {
        setActiveSelectionButton(nextActiveButton);
        setNextActiveButton("");
        setPreviousActiveButton(activeSelectionButton);
      }, 500);

      // waiting 1s for the fade out animation to play
    }

    if (previousActiveButton.length !== 0) {
      // rerender with new buttons then fade it in
      setPreviousActiveButton("");
      setFadeIn(true);
    }
  }, [fadeIn, SelectionButton, nextActiveButton, previousActiveButton.length]);

  let renderReadySectionButtons: any[] = [];
  if (!stackButtonsActive) {
    renderReadySectionButtons = sectionButtonTitles.map((title: string) => {
      const buttonHandler = () => {
        setNextActiveButton(title);
        setFadeIn(false);
      };

      if (title === activeSelectionButton) {
        return (
          <SelectionButton
            key={title}
            sx={{
              backgroundColor: "transparent",
              textDecoration: "underline",
              boxShadow: "none",
              color: "secondary.dark",
            }}
          >
            &nbsp; {title} &nbsp;
          </SelectionButton>
        );
      } else {
        return (
          <SelectionButton key={title} onClick={buttonHandler}>
            &nbsp;
            {title}&nbsp;
          </SelectionButton>
        );
      }
    });
  } else {
    renderReadySectionButtons = sectionStackedButtonTitles.map(
      (word: string[], index: number) => {
        const buttonHandler = () => {
          setNextActiveButton(sectionButtonTitles[index]);
          setFadeIn(false);
        };
        const renderReadyWordStack = word.map((word: string) => {
          return (
            <StackedTitleTypography>&nbsp;{word}&nbsp;</StackedTitleTypography>
          );
        });
        if (sectionButtonTitles[index] === activeSelectionButton) {
          return (
            <SelectionButton
              key={sectionButtonTitles[index]}
              sx={{
                backgroundColor: "transparent",
                textDecoration: "underline",
                boxShadow: "none",
                color: "secondary.dark",
              }}
            >
              {renderReadyWordStack}
            </SelectionButton>
          );
        } else {
          return (
            <SelectionButton
              key={sectionButtonTitles[index]}
              onClick={buttonHandler}
            >
              {renderReadyWordStack}
            </SelectionButton>
          );
        }
      }
    );
  }

  const renderReadyCodingBlock = (
    <>
      <TextContainer sx={{ opacity: `${fadeIn ? "1" : "0"}` }}>
        <StyledSubTitleTypography>
          <b>Coding Experience</b>
        </StyledSubTitleTypography>
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
      <TextContainer
        sx={{
          opacity: `${fadeIn ? 1 : 0}`,
          gap: "0",
          display: "grid",
          gridTemplateColumns: "100%",
        }}
      >
        <StyledSubTitleTypography>
          <b>Continous Improvement Engineer</b>
        </StyledSubTitleTypography>
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
        <StyledSubTitleTypography>
          <b>Avid Language Learner</b>
        </StyledSubTitleTypography>
        <StyledTypography>
          I'm a constant learner who loves to learn about other cultures and
          languages. I am currently studying for the French Exam.
        </StyledTypography>
        <StyledSubTitleTypography sx={{ marginTop: "20px" }}>
          <b>Dungeons and Dragons DM</b>
        </StyledSubTitleTypography>
        <StyledTypography>
          I'm a huge nerd, who loves to DM for anyone who wants to play. I've
          DMed the Strom Kings Thunder and Lost Mines of Phandelver
        </StyledTypography>
        <StyledSubTitleTypography sx={{ marginTop: "20px" }}>
          <b>Puzzle Dungeon</b>
        </StyledSubTitleTypography>
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
          activeSelectionButton === "Job Experience" ? "1fr 2fr" : "2fr 1fr"
        } `,
      }}
    >
      <SectionButtonsContainer>
        {renderReadySectionButtons}
      </SectionButtonsContainer>
      {activeSelectionButton === "Coding Experience" && renderReadyCodingBlock}
      {activeSelectionButton === "Job Experience" && renderReadyJobExperience}
      {activeSelectionButton === "Fun Stuff" && renderReadyFunStuff}
    </MainContainer>
  );
};
export default AboutMeSection;
