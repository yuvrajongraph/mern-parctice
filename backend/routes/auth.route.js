const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const authController = require("../controllers/auth.controller");
const isAuthenticate = require("../middlewares/auth.middleware");

router.post(
  "/signup",
  [
    check("email", "email is required").isEmail(),
    check("password", "password should be of at least 3 characters").isLength({
      min: 1,
    }),
  ],
  authController.signUp
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 }),
  ],
  authController.signIn
);

router.get("/test", isAuthenticate.verifyToken, (req, res) => {
  return res.json({
    message: "Passed",
  });
});

router.get("/signout", isAuthenticate.verifyToken, authController.signOut);

module.exports = router;
