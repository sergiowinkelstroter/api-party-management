const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://winksegio:jDSQpH9hNFDHBCY3@cluster0.c4wybrv.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("DB conectado!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
