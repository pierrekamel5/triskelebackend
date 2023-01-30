const express = require("express");

const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
var multer = require("multer");
var forms = multer();

const master = require("./routes/master");
const dashboard = require("./routes/dashboard");
const analytics = require("./routes/analytics");
const general = require("./routes/general");
const recommendations = require("./routes/recommendations");
const user_information = require("./routes/user_information");

const config = require("./config/database");

mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to detabase: " + config.database);
});
mongoose.connection.on("error", (err) => {
  console.log("Error with connection to db: " + err);
});

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/Mstr", master);
app.use("/Dashboard", dashboard);
app.use("", analytics);
app.use("/General", general);
app.use("/Rcmndtns", recommendations);
app.use("/User", user_information);

app.get("**", (req, res) => {
  return res.status(404).send("Not Found!");
});

const port = process.env.PORT || 55881;
app.listen(port, () => {
  console.log("server started on port: " + port);
});
