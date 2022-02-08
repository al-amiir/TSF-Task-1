import { Box } from "@mui/system";
import React from "react";
import mernimg from "./mern.jpg";
const Title = () => {
  return (
    <Box sx={{ color: "white", fontSize: "2rem", backgroundColor: "black", width: "100vw", height: "100vh", position: "fixed", top: "0", left: 0, zIndex: 1000, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <p>Al-Amir Abdull-Fattah Amir</p>
      <p>The Sparks Foundation Task-1</p>
      <p>Basic Banking System</p>
      <Box>
        <Box component="img" sx={{ width: "328px", filter: "contrast(1.2) saturate(1.2)" }} src={mernimg} alt="" />
      </Box>
    </Box>
  );
};

export default Title;
