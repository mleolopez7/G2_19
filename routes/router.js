"use strict";

var  PasajerosController = require("../controllers/pasajeros-controller"),
  express = require("express"),
  router = express.Router();

var  ReservaController = require("../controllers/reserva-controller"),
  express = require("express"),
  router = express.Router();

router
  //**** ENTIDADPASAJEROS *****/
  .get("/pasajeros/getall", PasajerosController.getAll)
  .post("/pasajeros/getone/:codigo_pasajero", PasajerosController.getOne)
  .post("/pasajeros//insert/:codigo_pasajero", PasajerosController.post)
  .put("/pasajero/update/:codigo_pasajero", PasajerosController.put)
  .delete("/pasajero/delete/:codigo_pasajero", PasajerosController.delete)
  
   //*****ENTIDAD AVION ****/
   .get("/avion/getall", AvionController.getAll)
   .post("/avion/getone/:numero_avion", AvionController.getOne)
   .post("/avion/insert/:numero_avion", AvionController.post)
   .put("/avion/update/:numero_avion", AvionController.put)
   .delete("/avion/delete/:numero_avion", AvionController.delete)


  //****RUTAS DE RESERVA****
  .get("/reserva/getall", ReservaController.getAll)
  .get("/reserva/getone/:numero_reserva", ReservaController.getone)
  .post("/reserva/insertar/:numero_reserva", ReservaController.post)
  .put("/reserva/actualizar/:numero_reserva", ReservaController.put)
  .delete("/reserva/eliminar/:numero_reserva", ReservaController.delete)
  .use(ReservaController.error404);


module.exports = router;
