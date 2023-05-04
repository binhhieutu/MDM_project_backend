const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.set("Cache-Control", "max-age=31536000");
  res.render("index", { title: "Mobile API", name: "Dev" });
});

module.exports = router;
