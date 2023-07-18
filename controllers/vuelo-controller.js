'use strict'

//CONTROL GET ALL
var VueloModel = require ('../models/Vuelo-Model'),
VueloController = () => {}

VueloController.gelAll = (req,res,next) => {
    VueloModel.getAll((err,rows) => {
        if(err){
            let locals = {
                litle: 'Error al consultar la base de datos',
                description : 'Error de sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }
        else
        {
            let locals = {
                litle: 'Lista de Reservas',
                data : rows
            }
            res.status(200).send(rows.rows)
            //res.render('index',locals)
        }
    })
}

// CONTROL GET ONE
VueloController.getone = (req,res,next) => {
    let codigo_vuelo = req.body.codigo_vuelo
    console.log(codigo_vuelo)

    VueloModel.getone(codigo_vuelo, (err,rows) => {
        console.log(err,'---', rows)
        if(err)
        {
            let locals = {
                litle : 'Error al buscar el registro con el id: ${codigo_vuelo}',
                description : 'Error de sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }
        else
        {
            let locals = {
                litle : 'Modificar Vuelo',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
}

//CONTROL INSERTAR
VueloController.post = (req,res,next) => {
    let Vuelo = {
        codigo_vuelo : req.body.codigo_vuelo,
        ciudad_origen : req.body.ciudad_origen,
        ciudad_destino : req.body.ciudad_destino,
        fecha_vuelo : req.body.fecha_vuelo,
        cantidad_pasajeros : req.body.cantidad_pasajeros,
        tipo_avion : req.body.tipo_avion,
        distancia_km : req.body.distancia_km
    }

    console.log(Vuelo)
    VueloModel.post(Vuelo, (err) => {
        if(err)
        {
            let locals = {
                litle: 'Error al guardar registro con el id: ${Vuelo.codigo_vuelo}',
                description: 'Error de sintaxis SQL',
                error: err
            }
            res.status(520).json(err);
        }
        else
        {
            res.send('El Vuelo se ha ingresado correctamente')
        }

    })
}

//CONTROL UPDATE
VueloController.put = (req,res,next) => {
    let Vuelo = {
        codigo_vuelo : req.body.codigo_vuelo,
        ciudad_origen : req.body.ciudad_origen,
        ciudad_destino : req.body.ciudad_destino,
        fecha_vuelo : req.body.fecha_vuelo,
        cantidad_pasajeros : req.body.cantidad_pasajeros,
        tipo_avion : req.body.tipo_avion,
        distancia_km : req.body.distancia_km
    }

    console.log(Vuelo)
    VueloModel.put(Vuelo, (err) => {
        if(err)
        {
            let locals = {
                litle: 'Error al actualizar el registro con el id  ${Vuelo.codigo_vuelo}',
                description: 'Error de sintaxis SQL',
                error: err
            }
            res.status(520).json(err);
        }
        else
        {
            res.send('El Vuelo se ha actualizado correctamente')
        }
    })
}

//CONTROL DELETE
VueloController.delete = (req,res,next) => {
    let codigo_vuelo = req.body.codigo_vuelo
    console.log(codigo_vuelo)

    VueloModel.delete(codigo_vuelo, (err) => {
        if(err)
        {
            let locals = {
                litle: 'Error al eliminar el registro con el id: {codigo_vuelo}',
                description: 'Error de sintaxis SQL',
                error: err
            }
            res.status(520).json(err);
        }
        else
        {
            res.send('El Vuelo se ha eliminado correctamente')
        }
    })
}

VueloController.addFrom = (req,res,next) =>
res.render('add-vuelo', {litle: 'Agregar vuelo'})

VueloController.error404 = (req,res,next) => {
    let error = new Error (),
    locals = {
        litle: 'Error 404',
        description: 'recurso no encontrado',
        error: error
    }
    error.status = 404

    res.render('error', locals)

    next()
}

module.exports = VueloController;