require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//mongoose parameter
const uri = process.env.MONGO || "mongodb://localhost:27017/einkaufsliste";
const params = { useNewUrlParser: true, useUnifiedTopology: true };
//connect mongoDB
mongoose
  .connect(uri, params)
  .then(console.log("MongoDB is connectet to: " + uri))
  .catch((err) => console.error("Problem to connect mongoDB: " + err));

const ItemSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  item: { type: String, required: true },
  priority: Number,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
  try {
  } catch (error) {}
  res.status(200).send("looft schon mal");
});

const port = process.env.PORT || 3030;

app.listen(port, () => console.log("server runs on port: " + port));
