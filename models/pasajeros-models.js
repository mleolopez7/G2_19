"use strict";

const PasajerosController = require("../controllers/pasajeros-controller");

var conn = require(".../confing/db-connection"),
PasajerosModel = () =>  {};

PasajerosModel.getAll = (cb) =>  conn.query("SELECT * FROM PASAJEROS", cb);

PasajerosModel.getOne = (data, cb) => conn.query( "SELECT * FROM PASAJEROS WHERE CODIGO_PASAJERO =$1",[data.codigo_pasajero], cb);

PasajerosModel.post = (data, cb) => 
     
       conn.query("call public.sp_pasajeros_insert ($1,$2,$3,$4,$5,$6.$7)",
       [
            data.codigo_pasajero,
            data.nombres,
            data.apellidos,
            data.fecha_registro,
            data.nacionalidad,
            data.numero_telefono,
            data.email
       ],
       cb);

PasajerosModel.put = (data,cb) => 
         
          conn.query("call public.sp_libro_update ($1,$2,$3,$4,$5,$6,$7)",
          [
            data.codigo_pasajero,
            data.nombres,
            data.apellidos,
            data.fecha_registro,
            data.nacionalidad,
            data.numero_telefono,
            data.email
          ],
          cb);

PasajerosModel.delete = (data, cb) =>
conn.query(
    "call public.sp_pasajeros_delete ($1)", [data.codigo_pasajero], cb
);


module.exports = PasajerosModel;