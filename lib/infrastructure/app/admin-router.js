const express = require("express");
const router = express.Router();
// Admin
router.use("/admin/account", require("../../interfaces/routes/account/admin-account-route"));
router.use("/admin/role", require("../../interfaces/routes/role/admin-role-route"));
router.use("/admin/rule", require("../../interfaces/routes/rule/admin-rule-route"));

module.exports = router;
