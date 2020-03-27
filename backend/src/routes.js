const express = require("express");

const sessionController = require("./controllers/sessionController");
const ongController = require("./controllers/ongController");
const profileController = require("./controllers/profileController");
const incidentController = require("./controllers/incidentController");

const routes = express.Router();

routes.post("/session", sessionController.create);

routes.get("/ongs", ongController.list);
routes.post("/ongs", ongController.create);
routes.delete("/ongs/:id", ongController.delete);

routes.get("/profile", profileController.list);

routes.get("/incidents", incidentController.list);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);

module.exports = routes;