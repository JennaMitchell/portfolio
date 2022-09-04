import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Homepage from "./pages/homepage/homepage";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 0, 0)",
      light: "rgb(253, 102, 102)",
      dark: "rgb(175, 3, 3)",
    },
    secondary: {
      main: "#616161",
      light: "#ffffff",
      dark: "#000000",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
});

function App() {
  const scrollHandler = (e: any) => {
    console.log(e);
  };
  return (
    <div className="App" onScroll={scrollHandler}>
      <ThemeProvider theme={theme}>
        <Homepage />
      </ThemeProvider>
    </div>
  );
}

export default App;
