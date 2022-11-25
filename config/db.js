const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "<MONGO_URI>"
  );
};
module.exports = connect;
