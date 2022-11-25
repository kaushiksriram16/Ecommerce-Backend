const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/db");
const productRouter = require("./routers/products");
const reviewRouter = require("./routers/reviews");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const products = new Map();

app.get("/", (req, res)=>{
    res.send("<h1>MoneyApp Assignment-1 by Kaushik Sriram</h1>");
});

app.use("/products", productRouter);

app.use("/review", reviewRouter);

var listener = app.listen(3000, async function () {
    try{
        await connect().then(console.log("Connected successfully"));
    } catch(err){
        console.log("Error: ", err.message);
    }
    console.log('Your app is listening on port ' + listener.address().port);
});
