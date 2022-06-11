import './App.css';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {orange} from "@mui/material/colors";
import Header from "./components/AppBar";
import Counter from "./components/Counter";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth={"lg"}>
        <Header/>
        <main>

        </main>
      </Container>
      <Counter/>
    </ThemeProvider>
  );
}

export default App;