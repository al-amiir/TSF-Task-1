import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const SingleClient = ({ info, setTempData, setTempId }) => {
  function handleClick(params) {
    setTempId(info._id);
    setTempData(info);
  }
  return (
    <Box sx={{ border: "1px solid brown", borderLeft: "10px solid brown", padding: "10px", borderRadius: "10px", width: "300px", backgroundColor: "#d1ffd0", marginBottom: "20px" }}>
      <p>ID: {info._id}</p>
      <p>Name: {info.name}</p>
      <p>City: {info.city}</p>
      <Box sx={{ color: "darkgreen" }}>Actual Balance: $ {info.money}</Box>
      <Link to={`/${info._id}`} style={{ textDecoration: "none", width: "100%", display: "flex", justifyContent: "center" }}>
        <Button onClick={handleClick} sx={{ color: " #00009f", border: "1px solid", marginTop: "10px" }}>
          Details
        </Button>
      </Link>
    </Box>
  );
};

export default SingleClient;
