const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://Mansi:mclusteronline@cluster0.jhhy1kx.mongodb.net/mern-project";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

db.on("error", () => {
  console.log(`Mongo DB Connection Failed`);
});

module.exports = mongoose;
