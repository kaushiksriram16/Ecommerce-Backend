const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://kaushiksriram16:kaushik123@cluster0.ozh7y.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
