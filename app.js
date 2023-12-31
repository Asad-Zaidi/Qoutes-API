var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/api/users");
var qoutesRouter = require('./routes/api/qoutes');
var config = require("config");

var app = express();
require("dotenv").config();
const cors = require('cors');

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/qoutes", qoutesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

mongoose
  .connect(config.get("db"))
  .then(async () => {
    console.log("Connected to MogoDB Successfully...!!!");
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB");
    console.log(err);
  });

// var PORT = process.env.PORT || 3040;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = app;
