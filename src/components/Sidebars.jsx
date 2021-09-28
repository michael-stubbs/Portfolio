import { createTheme, ThemeProvider } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import styles from "../styles/Sidebar.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#05386b",
    },
  },
});

function Sidebars() {
  return (
    <div className={styles.sidebar}>
      <ThemeProvider theme={theme}>
        <ul className={styles.sociallist}>
          <div className={styles.customList}>
            <li>
              <a
                href="https://github.com/michael-stubbs"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon color="primary" fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/michaelstubbsdev/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon color="primary" fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="https://www.upwork.com/freelancers/~0109b85efb3e634933"
                rel="noreferrer"
                target="_blank"
              >
                <ArrowCircleUpIcon color="primary" fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="mailto:michaelstubbsdev@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <MailOutlineIcon color="primary" fontSize="large" />
              </a>
            </li>
          </div>
        </ul>
      </ThemeProvider>
    </div>
  );
}

export default Sidebars;
