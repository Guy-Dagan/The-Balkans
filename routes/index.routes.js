const express = require('express');
const router = express.Router();

const Country = require("../models/Country.model");

/* GET home page */
router.get("/", async (req, res, next) => {
  const allCountries = await Country.find();

  res.render("index", {allCountries});
});

module.exports = router;
