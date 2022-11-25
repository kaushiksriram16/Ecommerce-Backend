const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");
const Review = require("../models/review.model");

//add Review
router.post("/:pid", async (req, res) => {
  try {
    const productId = req.params.pid;
    const userId = req.body.userId;
    const description = req.body.description;
    const review = new Review({
      productId: productId,
      userId: userId,
      description: description,
      cDate: new Date(),
      uDate: null,
    });
    r = await Review.create(review).then((review) => {
       Product.findOneAndUpdate(
            { _id: review.productId },
            { $push: { reviews: review._id } },
            { new: true },
            (err,doc) => {
                if(err)
                    console.log(err.message);
                else
                    console.log(doc);
            }
        );
    });
    res.send(r);
  } catch (err) {
    res.send(err.message);
  }
});

//get reviews
router.get("/", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        console.log(err);
    }
})

//get review by id
router.get("/:rid", async (req, res) => {
  const reviewId = req.params.rid;
  try {
    const review = await Review.findById(reviewId);
    res.json(review);
  } catch (err) {
    res.send(err.message);
  }
});

//delete Review
router.delete("/:rid", async (req, res) => {
  try {
    const reviewId = req.params.rid;
    const d = await Review.findByIdAndDelete(reviewId);
    res.send(d);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
