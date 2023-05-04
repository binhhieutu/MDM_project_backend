const express = require("express");
const router = express.Router();
const route = require("../../route");
const {{name.camelCase()}}Controller = require("../../controllers/{{name.paramCase()}}/{{name.paramCase()}}-controllers");

router.get(
  "/",
  route.handle(async (req) => await {{name.camelCase()}}Controller.get{{name.pascalCase()}}List(req, global.gServiceLocator.repository))
);

module.exports = router;
