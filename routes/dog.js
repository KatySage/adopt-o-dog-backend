"use strict";

const express = require("express"),
  db = require("../models/conn"),
  router = express.Router();
const commentsList = require("../models/commentsModel");
const dogsList = require("../models/dogsModel");

// GET all info for the dogs
router.get("/:dog_id?", async (req, res) => {
  const dogInfo = await dogsList.showDog(req.params.dog_id);
  res.json(dogInfo).status(200)
});
// GET all comments for this dog_id
router.get("/:dog_id?/comments", async (req, res) => {
  const dogComments = await commentsList.showAllCommentsDog(req.params.dog_id);
  res.json(dogComments).status(200)
});
//POST new comment for this dog_id
router.post("/:dog_id?/add", async (req, res) => {
  const dog_id = req.params.dog_id;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  const { comment_text, title } = req.body;
  const response = await commentsList.addComment(comment_text, title, today, dog_id);
  res.redirect(`http://localhost:3000/dog-profile/${dog_id}`)
});

module.exports = router;
