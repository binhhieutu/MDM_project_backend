const express = require("express");
const router = express.Router();
const route = require("../../route");
const adminRuleController = require("../../controllers/rule/admin-rule-controllers");

router.get(
  "/",
  route.handle(async (req) => await adminRuleController.getRuleList(req, global.gServiceLocator.repository))
);

router.post(
  "/",
  route.handle(async (req) => await adminRuleController.createRule(req, global.gServiceLocator.repository))
);

router.post(
  "/init",
  route.handle(async (req) => await adminRuleController.initRule(req, global.gServiceLocator.repository))
);

router.put(
  "/:id",
  route.handle(async (req) => await adminRuleController.updateRule(req, global.gServiceLocator.repository))
);

router.delete(
  "/:id",
  route.handle(async (req) => await adminRuleController.removeRule(req, global.gServiceLocator.repository))
);

module.exports = router;
