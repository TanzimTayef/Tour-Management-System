const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const toursRouter = require("./routes/tours.route");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/tours", toursRouter);

module.exports = app;
