const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "hbs");
app.use("/assets", express.static("assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
