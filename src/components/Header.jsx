import { Button, ButtonGroup } from "@mui/material";

function Header() {
  return (
    <div className="navbar">
      <div className="BtnGroup">
        <ButtonGroup color="primary" variant="text" classname="">
          <Button>1. About</Button>
          <Button>2. Experience</Button>
          <Button>3. Contact</Button>
        </ButtonGroup>
        <Button variant="outlined">Resume</Button>
      </div>
    </div>
  );
}

export default Header;
