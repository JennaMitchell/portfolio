import {
  MainContainer,
  ButtonLink,
  ClosingIcon,
} from "./menu-container-styled-components";

interface Props {
  menuButtonHandler: any;
  menuButtonActive: boolean;
}
const MenuContainer = ({ menuButtonHandler, menuButtonActive }: Props) => {
  const aboutMeHandler = () => {
    document.getElementById("AboutMe")?.scrollIntoView();
  };
  const projectsHandler = () => {
    document.getElementById("Projects")?.scrollIntoView();
  };
  const contactHandler = () => {
    document.getElementById("Contact")?.scrollIntoView();
  };

  return (
    <MainContainer
      sx={{
        right: `${menuButtonActive ? "0px" : "-400px"}`,
        "@media(max-width:400px)": {
          right: `${menuButtonActive ? "0px" : "-400px"}`,
        },
      }}
    >
      <ClosingIcon onClick={menuButtonHandler} />
      <ButtonLink onClick={aboutMeHandler}>About Me</ButtonLink>
      <ButtonLink onClick={projectsHandler}>Projects</ButtonLink>
      <ButtonLink onClick={contactHandler}>Contact</ButtonLink>
    </MainContainer>
  );
};
export default MenuContainer;
