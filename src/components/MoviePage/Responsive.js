import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Box)(({ theme }) => ({
  background: "#1976d2",
  height: "100vh",
  [theme.breakpoints.down("md")]: {
    background: "orange",
  },
  [theme.breakpoints.down("sm")]: {
    background: "blue",
  },
  [theme.breakpoints.up("lg")]: {
    background: "purple",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "white",
  fontWeight: 600,
  paddingTop: "2em",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

function Responsive() {
  return (
    <Wrapper>
        
    </Wrapper>
  );
}

export default Responsive;