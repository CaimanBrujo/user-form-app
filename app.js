const express = require("express");
const path = require("path");
const usersRouter = require("./routes/usersRouter");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse URL-encoded data (for forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files if needed (e.g., CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Use the users router for all routes
app.use("/", usersRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
