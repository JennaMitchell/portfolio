import {
  MainContainer,
  ImageContainer,
  TextContainer,
  StyledTypography,
  StyledLink,
  ImageStackContainer,
  CustomTooltip,
  DownArrow,
  StyledSubTitleTypography,
} from "./projects-styled-components";
import classes from "./projects.module.css";

import bar from "../../assets/images/bar.jpg";
import kanji from "../../assets/images/kanji.jpg";
import frenchText from "../../assets/images/french-text.jpg";
import { useState } from "react";
import { projectsData } from "./project-data";

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState("redDragonPizzeria");
  const [hoveredPhoto, setHoveredPhoto] = useState("");
  const [textContainerMouseOverActive, setTextContainerMouseOverActive] =
    useState<string>("");

  const redDragonPhotoCursorInHandler = () => {
    setHoveredPhoto("redDragonPizzeria");
  };
  const frenchQuizPhotoCursorInHandler = () => {
    setHoveredPhoto("frenchQuiz");
  };
  const kanji2GoPhotoCursorInHandler = () => {
    setHoveredPhoto("kanji2Go");
  };
  const photoCursorOutHandler = () => {
    setHoveredPhoto("");
  };
  const redDragonPhotoClickHandler = () => {
    setActiveProject("redDragonPizzeria");
  };
  const frenchQuizPhotoClickHandler = () => {
    setActiveProject("frenchQuiz");
  };
  const kanji2GoPhotoClickHandler = () => {
    setActiveProject("kanji2Go");
  };

  const textContainerMouseEnterHandler = () => {
    setTextContainerMouseOverActive(activeProject);
  };
  const textContainerMouseLeaveHandler = () => {
    setTextContainerMouseOverActive("");
  };

  return (
    <MainContainer>
      <TextContainer
        onMouseEnter={textContainerMouseEnterHandler}
        onMouseLeave={textContainerMouseLeaveHandler}
      >
        <StyledSubTitleTypography>
          <b>{projectsData[activeProject].name}</b>
        </StyledSubTitleTypography>
        <StyledTypography sx={{ width: "87.5%" }}>
          {projectsData[activeProject].description}
        </StyledTypography>
        <StyledTypography sx={{ marginTop: "20px" }}>
          <b>Built With: </b>

          {projectsData[activeProject].builtWith}
        </StyledTypography>
        <StyledTypography sx={{ marginTop: "20px" }}>
          <b>Link: </b>
          <StyledLink href={projectsData[activeProject].link}>
            {projectsData[activeProject].link}
          </StyledLink>
        </StyledTypography>
      </TextContainer>
      <ImageStackContainer>
        <ImageContainer
          sx={{
            top: "-10px",
            right: "2.5%",
            scale: `${activeProject === "redDragonPizzeria" && 1.25}`,
            zIndex: `${activeProject === "redDragonPizzeria" && 2}`,
            border: `${
              activeProject === "redDragonPizzeria" && "4px solid red"
            }`,

            backgroundImage: `url(${bar})`,
            "@media(max-width:800px)": { right: "7.5%" },
            "@media(max-width:700px)": { right: "2.5%" },
          }}
          className={`${
            textContainerMouseOverActive === "redDragonPizzeria" &&
            "hoverTrigger"
          }`}
          onMouseEnter={redDragonPhotoCursorInHandler}
          onMouseOut={photoCursorOutHandler}
          onClick={redDragonPhotoClickHandler}
        >
          <CustomTooltip
            sx={{
              opacity: `${hoveredPhoto === "redDragonPizzeria" ? "1" : "0"}`,
            }}
          >
            Red Dragon Pizzeria
            <DownArrow />
          </CustomTooltip>
        </ImageContainer>

        <ImageContainer
          sx={{
            top: "120px",
            right: "30%",
            backgroundImage: `url(${frenchText})`,
            scale: `${activeProject === "frenchQuiz" && 1.25}`,
            zIndex: `${activeProject === "frenchQuiz" && 2}`,
            border: `${activeProject === "frenchQuiz" && "4px solid red"}`,
            "@media(max-width:400px)": {
              top: "100px",
            },
          }}
          onMouseEnter={frenchQuizPhotoCursorInHandler}
          onMouseOut={photoCursorOutHandler}
          onClick={frenchQuizPhotoClickHandler}
          className={`${
            textContainerMouseOverActive === "frenchQuiz" &&
            classes.hoverTrigger
          }`}
        >
          <CustomTooltip
            sx={{
              opacity: `${hoveredPhoto === "frenchQuiz" ? "1" : "0"}`,
            }}
          >
            French Quiz
            <DownArrow />
          </CustomTooltip>
        </ImageContainer>

        <ImageContainer
          sx={{
            top: "10px",
            left: "2.5%",
            backgroundImage: `url(${kanji})`,
            scale: `${activeProject === "kanji2Go" && 1.25}`,
            zIndex: `${activeProject === "kanji2Go" && 2}`,
            border: `${activeProject === "kanji2Go" && "4px solid red"}`,
            "@media(max-width:800px)": { left: "7.5%" },
            "@media(max-width:700px)": { left: "2.5%" },
          }}
          onMouseEnter={kanji2GoPhotoCursorInHandler}
          onMouseOut={photoCursorOutHandler}
          onClick={kanji2GoPhotoClickHandler}
          className={`${textContainerMouseOverActive === "kanji2Go"}`}
        >
          <CustomTooltip
            sx={{
              opacity: `${hoveredPhoto === "kanji2Go" ? "1" : "0"}`,
            }}
          >
            Kanji2Go
            <DownArrow />
          </CustomTooltip>
        </ImageContainer>
      </ImageStackContainer>
    </MainContainer>
  );
};

export default ProjectSection;
