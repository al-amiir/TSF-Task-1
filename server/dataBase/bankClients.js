// mongoose
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.4noc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

const bankClientsSchema = new mongoose.Schema({
  name: String,
  city: String,
  money: Number,
});
const BankClients = mongoose.model("bankClients", bankClientsSchema);

module.exports = BankClients;
