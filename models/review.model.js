const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const reviewSchema = new Schema(
  {
    userId: { type: String, default: uuidv4 },
    productId: {type: String, ref:"Product", required: true},
    description: { type: String, required: true },
    cDate: { type: Date, default: new Date() },
    uDate: { type: Date, default: null }
  },
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
