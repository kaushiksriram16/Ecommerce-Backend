const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

//add a Product
router.post("/", async(req,res)=>{
    const product = new Product ({
            name: req.body.name,
            price: req.body.price,
            cDate: new Date(),
            uDate: null,
            reviews: new Map()
    });
    try{
        const p = await Product.create(product);
        res.json(p);
    } catch(err){
        res.send(err.message);
    }
});

//read all Products
router.get("/", async(req, res) => {
    try{
        const products = await Product.find()
        .populate('reviews')
        res.json(products);
    } catch(err){
        res.send(err.message)
    }
});

//read Product by id
router.get("/:id", async(req,res)=>{
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json(product);
});

//update Product
router.put("/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        const name = req.body.name;
        const price = req.body.price;
        if (name != undefined) product.name = name;
        if (price != undefined) product.price = price;
        product.uDate = new Date();
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.send(err.message);
    }
});

//delete a Product
router.delete("/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(deleteProduct);
    } catch (err) {
        res.send(err.message)
    }
});

module.exports = router;