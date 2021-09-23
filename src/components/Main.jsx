import { Button } from "@mui/material";
import { ReactComponent as Tree } from "../Barren-Tree-Silhouette-2.svg";

function Main() {
  return (
    <main>
      <div className="mainContainer">
        <div className="jumbotron">
          <h1 className="">Hi there, my name is</h1>
          <h2>Michael Stubbs.</h2>
          <h3>I build professional websites.</h3>
          <p>
            I'm a web developer specializing in MERN and Next.js. While I'm
            currently focused on offering my services as a freelance developer,
            I'm always looking for my next opportunity!
          </p>
          <div className="upwork">
            <Button variant="outlined" size="large">
              Check out my Upwork
            </Button>
          </div>
        </div>
        {/* <div className="treeImg">
          <Tree />
        </div> */}
      </div>
    </main>
  );
}

export default Main;
