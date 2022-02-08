const express = require("express");
const cors = require("cors");

// Data Base
const BankClients = require("./dataBase/bankClients");

// App
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const clientsData = await BankClients.find();
  res.send(clientsData);
});

// PUT  (Money Transfer)
app.put("/:id", async (req, res) => {
  let otherAccountID = req.body.otherAccountID;
  let moneyAmount = req.body.moneyAmount;

  const orignialAccountData = await BankClients.findById(req.params.id);
  const otherAccountData = await BankClients.findById(otherAccountID);

  const orignialAccountUpdate = await BankClients.findByIdAndUpdate(req.params.id, { money: orignialAccountData.money - moneyAmount }, { new: true });
  const otherAccountUpdate = await BankClients.findByIdAndUpdate(otherAccountID, { money: otherAccountData.money + moneyAmount }, { new: true });
  const clientsData = await BankClients.find();
  console.log(orignialAccountUpdate, otherAccountUpdate);
  res.send({ orignialAccountUpdate, otherAccountUpdate, clientsData });
});

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});
