'use strict'

var conn = require ("../config/db-connection"),
ReservaModel = () => {};

//GIT ONE
ReservaModel.gelAll = (cb) => conn.query("SELECT * FROM Reserva", cb);

//GIT ONE 
ReservaModel.getone = (numero_cliente, cb) =>
conn.query(
    "SELECT * FROM Reserva WHERE numero_reserva = $1", [numero_reserva], cb);

//INSERTAR
ReservaModel.post = (data, cb) =>
conn.query("call public.sp_reserva_insert ($1, $2, $3, $4, $5, $6, $7)",
[
    data.numero_cliente,
    data.codigo_vuelo,
    data.codigo_pasajero,
    data.nombre_pasajero,
    data.ciudad_destino,
    data.fecha_vuelo,
    data.precio_vuelo
],
cb);

//UPDATE
ReservaModel.put = (data, cb) =>
conn.query("call public.sp_reserva_update ($1, $2, $3, $4, $5, $6, $7)",
[
    data.numero_cliente,
    data.codigo_vuelo,
    data.codigo_pasajero,
    data.nombre_pasajero,
    data.ciudad_destino,
    data.fecha_vuelo,
    data.precio_vuelo
],
cb);

//DELETE
ReservaModel.delete = (numero_reserva, cb) =>
conn.query(
    "call public.sp_reserva_delete($1)", [numero_reserva],
cb);


module.exports = ReservaModel;