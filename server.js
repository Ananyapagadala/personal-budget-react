const cors = require("cors");
const express = require('express');
const app = express();
const port = 3001;
const chart_Data = require("./chartData.json");
var pie_chartData = chart_Data;
var dJs_data = chart_Data.DChart;

app.use(cors());

app.use("/", express.static("public"));
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/budget", (req, res) => {
  res.json(pie_chartData);
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});