const { Router } = require("express");
const usersController = require("../controllers/usersController");

const usersRouter = Router();

// Route: list all users
usersRouter.get("/", usersController.usersListGet);

// Route: show create user form
usersRouter.get("/create", usersController.usersCreateGet);

// Route: handle create user form
usersRouter.post("/create", usersController.usersCreatePost);

// Route: search users
usersRouter.get("/search", usersController.usersSearchGet);

module.exports = usersRouter;
