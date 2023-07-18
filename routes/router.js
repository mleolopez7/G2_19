"use strict";

var  PasajerosController = require("../controllers/pasajeros-controller"),
  express = require("express"),
  router = express.Router();

router
  //**** ENTIDADPASAJEROS *****/
  .get("/pasajeros/getall", PasajerosController.getAll)
  .post("/pasajeros/getone/:codigo_pasajero", PasajerosController.getOne)
  .post("pasajeros//insert/:codigo_pasajero", PasajerosController.post)
  .put("/pasajero/update/:codigo_pasajero", PasajerosController.put)
  .delete("/pasajero/delete/:codigo_pasajero", PasajerosController.delete)
  

module.exports = router;
