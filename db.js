const mongoose = require("mongoose");

const mongoURI =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";

const connectMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo Successfully");
  });
};

module.exports = connectMongo;
