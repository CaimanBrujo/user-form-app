const usersStorage = require("../storages/usersStorage");

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
  });
};

// Handle form submission to create a user
exports.usersCreatePost = (req, res) => {
  const { firstName, lastName } = req.body;
  usersStorage.addUser({ firstName, lastName });
  res.redirect("/");
};
