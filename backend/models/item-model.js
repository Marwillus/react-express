const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  item: { type: String, required: true },
  priority: Number,
});

module.exports = mongoose.model("Item", ItemSchema);
