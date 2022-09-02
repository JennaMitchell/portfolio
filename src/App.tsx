import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Homepage from "./pages/homepage/homepage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b21e35",
      light: "#e01e37",
      dark: "#641220",
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
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Homepage />
      </ThemeProvider>
    </div>
  );
}

export default App;
