'use strict'
var AvionModel = require('../models/avion-model'),
    AvionController = () => {}

    AvionControllerController.getAll = (req, res, next)  => {
        AvionModel.getAll((err, rows)  => {
            if(err)
            {
                let locals = {
                    title: 'Error al consultar la base de datos',
                    description: 'Error de sintaxis SQL',
                    error : err
                }
                res.render('error', locals)
            }
            else 
            {
                let locals ={
                    litle: 'Lista de Aviones',
                    data: rows
                }
                res.status(200).send(rows.rows)
            }
        })
    }

    AvionController.getOne = (req, res, next) => {
        let avion ={
            numero_avion : req.body-numero_avion
        }
        console.log(avion)

        AvionModel.getOne(pasajero, (err, rows) => {
            console.log(err, '---', rows)
            if(err)
            {
                let locals = {
                    title: 'Error al consultar la base de datos con el id: ${avion.numero_avion} ',
                    descripcion: 'Error de sintaxis SQL',
                    error: err
                }
                res.render('error', locals)
                
            }
            else
            {
               let locals ={
                title: 'Avion seleccionado',
                data: rows
               }
               res.status(200).send(rows.rows) 
            }
        })
    }

    
    AvionController.post = (req, res, next) => {
        let avion = {
          numero_avion: req.body.numero_avion,
          tipo_avion: req.body.tipo_avion,
          horas_vuelo: req.body.horas_vuelo,
          capacidad_pasajeros : req.body.capacidad_pasajeros,
          fecha_primer_vuelo : req.body.fecha_primer_vuelo,
          pais_construccion : req.body.pais_construccion,
          cantidad_vuelos : req.body.cantidad_vuelos
    }
    console.log(avion)
    AvionModel.post(avion,(err) => {
           if (err) 
           {
              let locals = {
               title: 'Error al consultar el registro con el id: ${avion.numero_avion}',
               description: 'error de sintaxis SQL',
               error: err
               }
                res.satatus(520).json(err);
           } 
           else  
           {
            res.send('avion ingresado de forma correcta')
           }

        } )
    }
            AvionModel.delete(avion, (err,rows) => {
             console.log(err, '---', rows, locals)
                if(err)
                {
                    let locals = {
                      title: 'error al eliminar el registro de avion',
                      description: 'error de sintaxis SQL',
                      error: err
                    }
                    res.render('error', locals)
                }
               else
                {
                    res.dend('Avion eliminado de forma correcta')

                }
               
            } )
        


         AvionController.addForm = (req, res, next) => 
            res.render('add-avion', {title: 'Agregar avion'}) 

           AvionController.error404 = (req, res, next) => {
                let error = new Error(),
                locals = {
                    title: 'Errpor 404',
                    description: 'Recurso no encontrado',
                    error: error
                }
           error.status = 404
           res.render('error', locals)
           next()
}
module.exports = AvionController;