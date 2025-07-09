const usersStorage = require("../storages/usersStorage");
const { body, validationResult } = require("express-validator");

// List all users
exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User List",
    users: usersStorage.getUsers(),
  });
};

// Show create user form
exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create User",
    errors: null,
  });
};

// Handle form submission to create a user
exports.usersCreatePost = [
  // Validate and sanitize fields
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required.")
    .isAlpha()
    .withMessage("First name must contain only letters.")
    .isLength({ min: 1, max: 10 })
    .withMessage("First name must be 1-10 characters."),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required.")
    .isAlpha()
    .withMessage("Last name must contain only letters.")
    .isLength({ min: 1, max: 10 })
    .withMessage("Last name must be 1-10 characters."),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Must be a valid email address."),
  body("age")
    .optional({ values: "falsy" })
    .isInt({ min: 18, max: 120 })
    .withMessage("Age must be between 18 and 120."),
  body("bio")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 200 })
    .withMessage("Bio must be 200 characters max."),

  // Process request after validation
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create User",
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  },
];

// Search for users
exports.usersSearchGet = (req, res) => {
  const { query } = req.query;
  const results = usersStorage.searchUser(query || "");
  res.render("searchResults", {
    title: "Search Results",
    users: results,
    query,
  });
};
