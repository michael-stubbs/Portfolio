import { Button, ButtonGroup } from "@mui/material";

function Header() {
  return (
    <div>
      <ButtonGroup color="primary" variant="text" classname="">
        <Button>1. About</Button>
        <Button>2. Experience</Button>
        <Button>3. Work</Button>
        <Button>5. Contact</Button>
      </ButtonGroup>
      <Button variant="outlined">Resume</Button>
    </div>
  );
}

export default Header;
