'use strict'
//get all

var AvionModel = require('../models/Avion-Models'),
AvionController = () => {}
 AvionController.getAll = (req, res, next)  => {
        AvionModel.getAll((err, rows)  => {
            if(err)
            {
                let locals = {
                    litle: 'Error al consultar la base de datos',
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
        let avion
         ={
            numero_avion : req.body-numero_avion
        }
        console.log(avion)

        AvionModel.getOne(pasajero, (err, rows) => {
            console.log(err, '---', rows)
            if(err)
            {
                let locals = {
                    litle: 'Error al consultar la base de datos con el id: ${avion.numero_avion} ',
                    descripcion: 'Error de sintaxis SQL',
                    error: err
                }
                res.render('error', locals)
                
            }
            else
            {
               let locals ={
                litle: 'Avion seleccionado',
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
                res.status(520).json(err);
           } 
           else  
           {
            res.send('avion ingresado de forma correcta')
           }

        } )
    }
    AvionController.delete = (req, res, next) => {
        let numero_avion = req.body.numero_avion
        console.log(numero_avion)

      AvionModel.delete(numero_avion,(err) => {
        if (err) 
        {
          let locals = {
            litle: "error al eliminar el registro de avion",
            description: "error de sintaxis SQL",
            error: err,
          }
          res.status(520).json(err);

        } 
        else 
        {
          res.send("Avion eliminado de forma correcta")
        }
      })
    }



         AvionController.addForm = (req, res, next) => 
            res.render('add-avion', {title: 'Agregar avion'}) 

           AvionController.error404 = (req, res, next) => {
                let error = new Error(),
                locals = {
                    title: 'Error 404',
                    description: 'Recurso no encontrado',
                    error: error
                }
           error.status = 404
           res.render('error', locals)
           next()
        }
module.exports = AvionController;