import { Button, ButtonGroup, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EDF5E1",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

function Header() {
  return (
    <div className="navbar">
      <div className="BtnGroup">
        <ThemeProvider theme={theme}>
          <ButtonGroup color="primary" variant="text" classname="">
            <Button>1. About</Button>
            <Button>2. Experience</Button>
            <Button>3. Contact</Button>
          </ButtonGroup>
          <Button variant="outlined">Resume</Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
