'use strict'

//GET ALL ....

var ReservaModel = require ('../models/reserva-models'),
ReservaController = () => {}

ReservaController.getAll = (req,res,next) => {
    ReservaModel.getAll((err,rows) => {
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

//GET ONE
ReservaController.getone = (req,res,next) => {
    let numero_cliente = req.body.numero_reserva
    console.log(numero_reserva)

    ReservaModel.getone(numero_reserva, (err,rows) => {
        console.log(err,'---', rows)
        if(err)
        {
            let locals = {
                litle : 'Error al buscar el registro con el id: ${numero_reserva}',
                description : 'Error de sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }
        else
        {
            let locals = {
                litle : 'Editar Reserva',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
}

//INSERTAR
ReservaController.post = (req,res,next) => {
    let Reserva = {
        numero_reserva : req.body.numero_reserva,
        codigo_vuelo : req.body.codigo_vuelo,
        codigo_pasajero : req.body.codigo_pasajero,
        nombre_pasajero : req.body.nombre_pasajero,
        ciudad_destino : req.body.ciudad_destino,
        fecha_vuelo : req.body.fecha_vuelo,
        precio_vuelo : req.body.precio_vuelo
    }

    console.log(Reserva)
    ReservaModel.post(Reserva, (err) => {
        if(err)
        {
            let locals = {
                litle: 'Error al guardar registro con el id: ${reserva.numero_reserva}',
                description: 'Error de sintaxis SQL',
                error: err
            }
            res.status(520).json(err);
        }
        else
        {
            res.send('Reservacion ingresada de forma correcta')
        }

    })
}

//UPDATE
ReservaController.put = (req,res,next) => {
    let Reserva = {
        numero_reserva : req.body.numero_reserva,
        codigo_vuelo : req.body.codigo_vuelo,
        codigo_pasajero : req.body.codigo_pasajero,
        nombre_pasajero : req.body.nombre_pasajero,
        ciudad_destino : req.body.ciudad_destino,
        fecha_vuelo : req.body.fecha_vuelo,
        precio_vuelo : req.body.precio_vuelo
    }

    console.log(Reserva)

    ReservaModel.put(Reserva, (err) => {
        if(err)
        {
            let locals = {
                litle: 'Error al actualizar el registro con el id  ${Reserva.numero_reserva}',
                description: 'Error de sintaxis SQL',
                error: err
            }
            res.status(520).json(err);
        }
        else
        {
            res.send('Actualizacion correcta de Reservacion')
        }
    })
}

//DELETE
ReservaController.delete = (req,res,next) => {
    let numero_reserva = req.body.numero_reserva
    console.log(numero_reserva)

    ReservaModel.delete(numero_reserva, (err) => {
        if(err)
        {
            let locals = {
                litle: 'Error al eliminar el registro con el id: {numero_cliente}',
                description: 'Error de sintaxis SQL',
                error: err
            }
            res.status(520).json(err);
        }
        else
        {
            res.send('Se elimino la reserva de manera correcta')
        }
    })
}

ReservaController.addFrom = (req,res,next) =>
res.render('add-reserva', {litle: 'Agregar reserva'})

ReservaController.error404 = (req,res,next) => {
    let error = new Error (),
    locals = {
        litle: 'Error 404',
        description: 'No se encontro la Reserva',
        error: error
    }
    error.status = 404

    res.render('error', locals)

    next()
}

module.exports = ReservaController;