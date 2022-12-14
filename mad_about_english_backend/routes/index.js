const router = require("express").Router();
const contactRoutes = require("./contact");

module.exports = (app) => {
  app.use(
    "/api",
    router.use("/", contactRoutes)
  );
};

