require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const passport = require("passport");
const passportConfig = require("./config/passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const postRoutes = require("./routes/postRoutes");
const errorHandler = require("./middlewares/errorHandler");
const commentRoutes = require("./routes/commentRoutes");
const methodOverride = require("method-override");
const userRoutes = require("./routes/userRoutes");
const app = express();
const port = process.env.PORT || 5000;

// middleware for passing form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: "itachi uchiha",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGOOSE_URL }),
  })
);

// Method override middleware
app.use(methodOverride("_method"));

// Passport configuration
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

// EJS
app.set("view engine", "ejs");

//Routes
// Home Route
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    error: "",
    user: req.user,
  });
});

// User Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// Post routes
app.use("/posts", postRoutes);

// Comment route
app.use("/", commentRoutes);

//Error handler
app.use(errorHandler);

//Connect DB
mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => {
    app.listen(port, () => {
      console.log("DB connected Successfully");

      console.log(`http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("DB connection failed");
  });
