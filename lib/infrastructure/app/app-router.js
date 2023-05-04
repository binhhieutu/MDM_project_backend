const express = require("express");
const router = express.Router();
// App
router.use("/app/users", require("../../interfaces/routes/user/user-route"));

module.exports = router;
