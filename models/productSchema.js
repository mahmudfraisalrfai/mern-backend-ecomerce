const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  products: { type: Array, default: [] },
  createDate: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("product", productSchema);
