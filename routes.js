const express = require("express");
const router = express.Router();
const { createNewAccount } = require("./middleware/users");

router.get("/", (req, res) => {
  res.redirect("/newsletter-register");
});

router.get("/newsletter-thanks", (req, res) => {
  res.render("newsletter-thanks");
});

router.post("/newsletter-register", createNewAccount, (req, res) => {
  res.redirect("/newsletter-register");
});

router.get("/newsletter-thanks", (req, res) => {
  res.render("newsletter-thanks");
});

router.get("/newsletter-error", (req, res) => {
  res.render("newsletter-error");
});

module.exports = router;
