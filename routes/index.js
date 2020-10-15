"use strict";

const express = require("express"),
  db = require("../models/conn"),
  router = express.Router();
const dogsList = require("../models/dogsModel");
//GET all info for the dogs
router.get("/", async (req, res) => {
  const dogComments = await dogsList.showAllDogs();
  res.json(dogComments).status(200)
});
module.exports = router;