"use strict";

const mongoose = require("mongoose");
const connectString =
  "mongodb+srv://ecommecne:Nhatcuong221192@cluster0.kwfgibi.mongodb.net/?retryWrites=true&w=majority";
const { countConnect } = require("../helpers/check.connect");
class Database {
  constructor() {
    this.connect();
  }
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then((_) => {
        console.log("Connect MongoDB success PRO"), countConnect();
      })
      .catch((err) => console.log("Error Connect!"));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
