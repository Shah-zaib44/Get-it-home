const express = require("express");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const errorHandler = require("./app/middleware/error");
dotenv.config({ path: "./app/config/config.env" });

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/product.routes")(app);
require("./app/routes/coupon.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/review.routes")(app);
require("./app/routes/order.routes")(app);
app.use(errorHandler);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
