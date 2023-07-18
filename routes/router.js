"use strict";

var  PasajerosController = require("../controllers/pasajeros-controller"),
     AvionController = require("../controllers/avion-controller"),
     ReservaController = require("../controllers/reserva-controller"),
     VueloController = require("../controllers/vuelo-controller"),

    express = require("express"),
    router = express.Router();



router
  //**** ENTIDADPASAJEROS *****/
  .get("/pasajeros/getall", PasajerosController.getAll)
  .post("/pasajeros/getone/:codigo_pasajero", PasajerosController.getOne)
  .post("pasajeros//insert/:codigo_pasajero", PasajerosController.post)
  .put("/pasajero/update/:codigo_pasajero", PasajerosController.put)
  .delete("/pasajero/delete/:codigo_pasajero", PasajerosController.delete)

  //***avion*****
  .get("/avion/getall", AvionController.getAll)
  .get("/avion/getone/:numero_avion", AvionController.getone)
  .post("/avion/insert/:numero_avion", AvionController.post)
  .put("/avion/update/:numero_avion", AvionController.put)
  .delete("/avion/delete/:numero_avion", AvionController.delete)

  //****RUTAS DE RESERVA****
  .get("/reserva/getall", ReservaController.getAll)
  .get("/reserva/getone/:numero_reserva", ReservaController.getone)
  .post("/reserva/insertar/:numero_reserva", ReservaController.post)
  .put("/reserva/actualizar/:numero_reserva", ReservaController.put)
  .delete("/reserva/eliminar/:numero_reserva", ReservaController.delete)

  //**** VUELOS ****
  .get("/vuelo/getall", VueloController.getAll)
  .get("/vuelo/getone/:codigo_vuelo", VueloController.getone)
  .post("/vuelo/insertar/:codigo_vuelo", VueloController.post)
  .put("/vuelo/actualizar/:codigo_vuelo", VueloController.put)
  .delete("/vuelo/eliminar/:codigo_vuelo", VueloController.delete)

  .use(PasajerosController.error404)
  .use(AvionController.error404)
  .use(ReservaController.error404)
  .use(VueloController.error404);


module.exports = router;
