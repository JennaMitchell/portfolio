interface ProjectData {
  [key: string]: { [key: string]: string };
}
const projectsData: ProjectData = {
  kanji2Go: {
    name: "Kanji2Go",
    description:
      "Japanense language teaching web app, that features premade kanji practice sheets, a live kanji drawing quiz and a custom kanji sheet creator. ",
    link: "https://www.kanji2go.com",
    builtWith: "Chakra, React, JavaScript, HTML and CSS",
  },
  frenchQuiz: {
    name: "French Quiz",
    description:
      "French learning aid that allows students to practice their vocab, grammar and common phrases.",
    link: "https://french-quiz.netlify.app",
    builtWith: "Typescript, React, Javascript, Material UI, HTML and CSS",
  },

  redDragonPizzeria: {
    name: "Red Dragon Pizzeria",
    description:
      "Dungeons and Dragons themed pizzeria. That allows users to create custom pepperoni pizza layouts, top pizzas to their liming and place online orders.",
    link: "https://red-dragon-pizzeria.netlify.app/",
    builtWith: "Material UI, React, JavaScript, HTML and CSS.",
  },
};
export { projectsData };
