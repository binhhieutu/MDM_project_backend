const express = require("express");
const router = express.Router();
const route = require("../../route");
const adminRoleController = require("../../controllers/role/admin-role-controllers");

router.get(
  "/",
  route.handle(async (req) => await adminRoleController.getRoleList(req, global.gServiceLocator.repository))
);

router.post(
  "/",
  route.handle(async (req) => await adminRoleController.createRole(req, global.gServiceLocator.repository))
);

router.post(
  "/init",
  route.handle(async (req) => await adminRoleController.initRole(req, global.gServiceLocator.repository))
);

router.put(
  "/:id",
  route.handle(async (req) => await adminRoleController.updateRole(req, global.gServiceLocator.repository))
);

router.delete(
  "/:id",
  route.handle(async (req) => await adminRoleController.removeRole(req, global.gServiceLocator.repository))
);

module.exports = router;
