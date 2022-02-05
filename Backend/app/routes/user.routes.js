module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();
  const { protect, authorize } = require("../middleware/auth.middleware");
  // Create a new Tutorial
  router.post("/register", users.register);
  router.post("/login", users.login);
  router.put("/updatepassword", protect, users.updatePassword);
  router.post("/forgotpassword", users.forgotPassword);
  router.put("/resetpassword/:resettoken", users.resetPassword);
  // Retrieve all product
  router.get("/", users.findAll);

  // Update a Tutorial with id
  router.put("/:id", users.update);

  // Delete a Tutorial with id
  router.delete("/:id", users.delete);

  app.use("/api", router);
};
