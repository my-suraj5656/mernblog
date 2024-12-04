const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose
      .connect(`${process.env.URI}`)
      .then(() => console.log("Connected to DB"));
  } catch (error) {
    console.log(error);
  }
};
connect();
module.exports = connect;
