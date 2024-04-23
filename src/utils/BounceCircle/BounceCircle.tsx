import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const BounceCircle = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        height: 20,
        width: 20,
        borderRadius: "50%",
        backgroundColor: "primary.main",
        left: 90,
        right: 50,
        top: 70,
        animation: `${bounceAnimation} 3s infinite`, // Translate the box to center it
      }}
    ></Box>
  );
};

export default BounceCircle;
