const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  cDate: { type: Date, default: new Date() },
  uDate: { type: Date, default: null },
  reviews: [{ type: ObjectId, ref:"Review" }]
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
