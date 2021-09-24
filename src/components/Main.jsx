import { Button } from "@mui/material";

import styles from "../Styles/Main.module.scss";

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
            <Button variant="outlined" size="large">
              Check out my Upwork
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
