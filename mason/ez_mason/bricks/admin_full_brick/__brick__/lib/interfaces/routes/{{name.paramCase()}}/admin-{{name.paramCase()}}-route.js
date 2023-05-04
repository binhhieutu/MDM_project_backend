const express = require("express");
const router = express.Router();
const route = require("../../route");
const admin{{name.pascalCase()}}Controller = require("../../controllers/{{name.paramCase()}}/admin-{{name.paramCase()}}-controllers");

router.get(
  "/",
  route.handle(async (req) => await admin{{name.pascalCase()}}Controller.get{{name.pascalCase()}}List(req, global.gServiceLocator.repository))
);

router.post(
  "/",
  route.handle(async (req) => await admin{{name.pascalCase()}}Controller.create{{name.pascalCase()}}(req, global.gServiceLocator.repository))
);

router.put(
  "/:id",
  route.handle(async (req) => await admin{{name.pascalCase()}}Controller.update{{name.pascalCase()}}(req, global.gServiceLocator.repository))
);

router.delete(
  "/:id",
  route.handle(async (req) => await admin{{name.pascalCase()}}Controller.remove{{name.pascalCase()}}(req, global.gServiceLocator.repository))
);

module.exports = router;
