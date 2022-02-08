import React, { useEffect, useState } from "react";
// UI
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";

// Route
import { Routes, Route, Link } from "react-router-dom";

const SingleClientDashBoard = ({ tempData, setTempData, clientsArray, setClientsArray }) => {
  const [moneyAmount, setMoneyAmount] = useState("");
  const [transferCondition, setTransferCondition] = useState(true);
  // Select
  const [otherAccountID, setOtherAccountID] = useState("");
  const handleChange = (event) => {
    setOtherAccountID(event.target.value);
  };

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ otherAccountID, moneyAmount }),
  };
  function handleInputMoney(e) {
    setMoneyAmount(Number(e.target.value));
  }
  function handleTransfer() {
    fetch(`http://localhost:5000/${tempData._id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setClientsArray(data.clientsData);
        setTempData(data.orignialAccountUpdate);
      });
    setMoneyAmount("");
  }
  useEffect(() => {
    console.log({ transferCondition, moneyAmount });
    moneyAmount > tempData.money ? setTransferCondition(false) : setTransferCondition(true);
  }, [transferCondition, moneyAmount]);

  return (
    <Box>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-left-arrows-kmg-design-glyph-kmg-design-1.png" />
      </Link>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontFamily: "'Anton', sans-serif", filter: "saturate(1.3)", borderBottom: "3px solid", marginBottom: "20px" }}>
        <Box component="img" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/100/000000/external-bank-crowdfunding-icongeek26-linear-colour-icongeek26.png" sx={{ border: "7px solid", borderRadius: "10px" }} />
        <Box>Money Transfer Board</Box>
      </Box>
      <Box sx={{ marginBottom: "30px" }}>
        <Box sx={{ fontSize: "1.5rem", marginBottom: "15px" }}>Account Details:</Box>
        <Box sx={{ paddingLeft: "15px", border: "1px solid", borderRadius: "6px", backgroundColor: "aliceblue" }}>
          <p>ID: {tempData._id}</p>
          <p>Name: {tempData.name}</p>
          <p>City: {tempData.city}</p>
          <p>Address: {tempData.address}</p>
          <p>Email: {tempData.email}</p>
          <p>Phone: {tempData.phone}</p>
          <Box sx={{ color: "darkgreen", marginBottom: "10px" }}>Actual Balance: $ {tempData.money} </Box>
        </Box>
      </Box>
      {/* Select  */}
      <Box sx={{ minWidth: 120 }}>
        <Box sx={{ fontSize: "1.5rem", marginBottom: "15px" }}>Choose An Account:</Box>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Transfer Money To</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={otherAccountID} label="Transfer Money To" onChange={handleChange}>
            {clientsArray.map((client) =>
              client._id === tempData._id ? (
                ""
              ) : (
                <MenuItem value={client._id} datamoney={client.money}>
                  <Box sx={{ border: "1px solid black", borderRadius: "5px", width: "100%", padding: "10px", backgroundColor: "#fffba9" }}>
                    <p>ID: {client._id}</p>
                    <p>Name: {client.name}</p>
                    <p>City: {client.city}</p>
                    <p>Address: {client.address}</p>
                    <p>Email: {client.email}</p>
                    <p>Phone: {client.phone}</p>
                    <Box sx={{ color: "darkgreen" }}>Actual Balance: $ {client.money}</Box>
                  </Box>
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "50px" }}>
        <Box sx={{ marginRight: "10px" }}>
          <InputLabel id="m"> {transferCondition ? <Box sx={{ color: "green" }}>Input money number</Box> : <Box sx={{ color: "brown" }}>More than your balance</Box>}</InputLabel>
          <Box sx={{ padding: "10px" }} component="input" id="m" type="number" value={moneyAmount} onInput={handleInputMoney} />
        </Box>
        <Button onClick={handleTransfer} sx={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid", backgroundColor: `${transferCondition ? "#90ff90" : "brown"}`, color: "black" }} disabled={transferCondition ? false : true}>
          <Box sx={{ marginRight: "10px" }}>transfer money</Box>
          <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/40/000000/external-money-banking-and-financial-xnimrodx-lineal-color-xnimrodx-2.png" />
        </Button>
      </Box>
    </Box>
  );
};

export default SingleClientDashBoard;
