require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 8081;
const connectDb = require("./db");
const bodyParser = require("body-parser");
const cors = require("cors");
connectDb();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", require("./routes/service"));

app.listen(port, () => console.log(`Server started at port: ${port}`));
