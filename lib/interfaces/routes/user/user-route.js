const express = require("express");
const router = express.Router();
const route = require("../../route");
const userController = require("../../controllers/user/user-controllers");

router.post(
  "/send-otp",
  route.handle(async (req) => await userController.sendOTP(req, global.gServiceLocator.repository))
);

router.post(
  "/validation-otp",
  route.handle(async (req) => await userController.validateOTP(req, global.gServiceLocator.repository))
);

router.post(
  "/login",
  route.handle(async (req) => await userController.login(req, global.gServiceLocator.repository))
);

router.get(
  "/profile",
  route.handle(async (req) => await userController.getProfile(req, global.gServiceLocator.repository))
);

module.exports = router;
