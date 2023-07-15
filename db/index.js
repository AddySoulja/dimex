const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.PORT_DB);
    console.log(`Connected to database: ${connect.connection.host}`);
  } catch (err) {
    console.log(`Error connection to database: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
