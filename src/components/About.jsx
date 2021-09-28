import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import styles from "../styles/About.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.smallTitle}>1. About Me</h2>
      <div className={styles.aboutMain}>
        <div className={styles.inner}>
          <p className={styles.textSection}>
            My interest in web development began as early as 8th grade when I
            learned basic web development from a family friend. It turned out
            that all that playing around in HTML and CSS really taught me a lot!
          </p>
          <p className={styles.textSection}>
            Fast foward to 2017 and I had just completed my degree in Geology.
            Pretty far off, right? After working in Geotechnical Engineering for
            3 years I finally came to understand that it wasn't for me. In 2020
            I began devoting all my time and resources into web development in
            the hopes that it would bring me more satisfaction, and I haven't
            looked back since!
          </p>
          <p className={styles.textSection}>
            I fell in love with React and Next.js, and have had the pleasure of
            working on collaborative projects such as an interior design
            website, a review blog, and even an upcoming app for short story
            writers.
          </p>
        </div>

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "#8EE4AF",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            fontFamily: "'Inter', 'sans-serif'",
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          <ul>
            <ListSubheader sx={{ bgcolor: "#379683", fontWeight: "bold" }}>
              Technologies
            </ListSubheader>
            <ListItem>
              <ListItemText>React</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Redux</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>TypeScript</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Material-UI</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Bootstrap</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Sass</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Next.js</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Express</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Node.js</ListItemText>
            </ListItem>
          </ul>
        </List>
      </div>
    </div>
  );
}

export default About;
