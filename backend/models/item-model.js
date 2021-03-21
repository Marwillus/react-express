const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  priority: Number,
  quantity: Number,
});

module.exports = mongoose.model("Item", ItemSchema);
