import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import ClinetsDashBoard from "./components/ClinetsDashBoard";
import SingleClient from "./components/SingleClient";
import SingleClientDashBoard from "./components/SingleClientDashBoard";
import Title from "./components/Title";

const App = () => {
  const [clientsArray, setClientsArray] = useState([]);
  const [tempId, setTempId] = useState("");
  const [tempData, setTempData] = useState({});
  useEffect(() => {
    console.log({ clientsArray });
  }, [clientsArray]);

  return (
    <Box sx={{ padding: "20px", fontFamily: "'Cabin', sans-serif" }}>
      {/* <Title /> */}
      <Routes>
        <Route path="/" element={<ClinetsDashBoard setTempId={setTempId} setTempData={setTempData} tempData={tempData} clientsArray={clientsArray} setClientsArray={setClientsArray} />} />
        <Route path={`/${tempId}`} element={<SingleClientDashBoard tempData={tempData} setTempData={setTempData} clientsArray={clientsArray} setClientsArray={setClientsArray} />} />
      </Routes>
    </Box>
  );
};

export default App;
