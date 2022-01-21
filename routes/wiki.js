const express = require('express');
const router = express.Router();
const { addPage } = require("../views");
const { wikiPage } = require("../views");


router.get("/", (req, res, next) => {
  res.send(wikiPage());
})

router.post("/", (req, res, next) => {
  res.send("Please post");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;




