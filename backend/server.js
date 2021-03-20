require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Item = require("./models/item-model");

//mongoose parameter
const uri = process.env.MONGO || "mongodb://localhost:27017/einkaufsliste";
const params = { useNewUrlParser: true, useUnifiedTopology: true };
//connect mongoDB
mongoose
  .connect(uri, params)
  .then(console.log("MongoDB is connectet to: " + uri))
  .catch((err) => console.error("Problem to connect mongoDB: " + err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
  try {
    const allItems = await Item.find();
    res.status(200).send(allItems);
  } catch (error) {
    console.error(error);
  }
});

app.post("/", async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json({
      message: "item succesfully created",
      createdProduct: newItem,
    });
  } catch (error) {
    res.status(500).send("couldnt create item: " + error);
  }
});

const port = process.env.PORT || 3030;

app.listen(port, () => console.log("server runs on port: " + port));
