require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const corsHeader = require("./middleware/cors");
const Item = require("./models/item-model");

//mongoose parameter
const uri = process.env.MONGO || "mongodb://localhost:27017/einkaufsliste";
const params = { useNewUrlParser: true, useUnifiedTopology: true };
//connect mongoDB
mongoose
  .connect(uri, params)
  .then(console.log("MongoDB is connected"))
  .catch((err) => console.error("Problem to connect mongoDB: " + err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(corsHeader);

app.get("/items", async (req, res, next) => {
  try {
    const allItems = await Item.find();
    res.status(200).send(allItems);
  } catch (error) {
    console.error(error);
  }
});

app.post("/items", async (req, res, next) => {
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

app.put("/items", async (req, res, next) => {
  try {
    const updatedItem = await Item.updateOne(
      { _id: req.body._id },
      { name: req.body.name }
    );
    res.status(201).json({
      message: "item succesfully updated",
      createdProduct: updatedItem,
    });
  } catch (error) {
    res.status(500).send("couldnt update item: " + error);
  }
});

app.delete("/items", async (req, res, next) => {
  try {
    console.log(req.params);
    const deletedItem = await Item.deleteOne({ _id: req.body._id });
    res.status(201).json({
      message: "item succesfully deleted",
      createdProduct: deletedItem,
    });
  } catch (error) {
    res.status(500).send("couldnt delete item: " + error);
  }
});

const port = process.env.PORT || 3030;

app.listen(port, () => console.log("server runs on port: " + port));
