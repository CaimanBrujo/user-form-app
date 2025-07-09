const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");

// Set EJS as template engine
app.set("view engine", "ejs");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Use our router
app.use("/", usersRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
