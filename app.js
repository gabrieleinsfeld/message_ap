// Importing basics
const express = require("express");
const path = require("node:path");

// Initialize Routers
const app = express();
const indexRouter = require("./routes/indexRouter");

// Config Views
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set routers
app.use("/", indexRouter);

// Listen to port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
