import { Button, createTheme, ThemeProvider } from "@mui/material";

import styles from "../styles/Main.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#215385",
      contrastText: "#EDF5E1",
    },
  },
});

function Main() {
  return (
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.jumbotron}>
          <h1 className="">Hi there, my name is</h1>
          <h2>Michael Stubbs.</h2>
          <h3>I build professional websites.</h3>
          <p>
            I'm a web developer specializing in MERN and Next.js. While I'm
            currently focused on offering my services as a freelance developer,
            I'm always looking for my next opportunity!
          </p>
          <div className={styles.upwork}>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="https://www.upwork.com/freelancers/~0109b85efb3e634933"
                target="_blank"
                sx={{ fontFamily: "Inter" }}
              >
                Check out my Upwork
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
