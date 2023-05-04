const express = require("express");
const router = express.Router();
const route = require("../../route");
const adminAccountController = require("../../controllers/account/admin-account-controllers");

router.get(
  "/",
  route.handle(async (req) => await adminAccountController.getAccountList(req, global.gServiceLocator.repository))
);

router.post(
  "/",
  route.handle(async (req) => await adminAccountController.createAccount(req, global.gServiceLocator.repository))
);

router.put(
  "/:id",
  route.handle(async (req) => await adminAccountController.updateAccount(req, global.gServiceLocator.repository))
);

router.delete(
  "/:id",
  route.handle(async (req) => await adminAccountController.removeAccount(req, global.gServiceLocator.repository))
);

router.post(
  "/login",
  route.handle(async (req) => await adminAccountController.login(req, global.gServiceLocator.repository))
);

router.post(
  "/logout",
  route.handle(async (req) => await adminAccountController.logout(req, global.gServiceLocator.repository))
);
module.exports = router;
