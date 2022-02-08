import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleClient from "./SingleClient";

const ClinetsDashBoard = ({ setTempData, setTempId, clientsArray, setClientsArray }) => {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => setClientsArray(data));
  }, []);

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontFamily: "'Anton', sans-serif", borderBottom: "3px solid black" }}>
        <Box component="img" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/100/000000/external-bank-taxes-flatart-icons-lineal-color-flatarticons.png" sx={{ border: "7px solid", borderRadius: "10px" }} />
        <Box>The Sparks Foundation Bank</Box>
      </Box>
      <Box sx={{ paddingLeft: "20px" }}>
        <Box sx={{ display: "flex", alignItems: "center", fontSize: "1.5rem" }}>
          <img src="https://img.icons8.com/plasticine/100/000000/list.png" /> Clients Dash Board:
        </Box>
        {/*  */}
        <Box sx={{ paddingLeft: "50px", display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          {clientsArray.map((client) => (
            <SingleClient key={client._id} info={client} setTempData={setTempData} setTempId={setTempId} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClinetsDashBoard;
