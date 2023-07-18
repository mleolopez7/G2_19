'use strict'

var PasajerosModel = require('../models/pasajeros-model'),
    PasajerosController = () => {}

    PasajerosControllerController.getAll = (req, res, next)  => {
        PasajerosModel.getAll((err, rows)  => {
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
                    litle: 'Lista de Pasajeros',
                    data: rows
                }
                res.status(200).send(rows.rows)
            }
        })
    }

    PasajerosController.getOne = (req, res, next) => {
        let Pasajeros ={
            codigo_pasajero : req.body-codigo_pasajero
        }
        console.log(pasajeros)

        PasajerosModel.getOne(pasajero, (err, rows) => {
            console.log(err, '---', rows)
            if(err)
            {
                let locals = {
                    title: 'Error al consultar la base de datos con el id: ${pasajeros.codigo_pasajero} ',
                    descripcion: 'Error de sintaxis SQL',
                    error: err
                }
                res.render('error', locals)
                
            }
            else
            {
               let locals ={
                title: 'Pasajero seleccionado',
                data: rows
               }
               res.status(200).send(rows.rows) 
            }
        })
    }
    
    PasajerosController.post = (req, res, next) => {
        let pasajeros = {
          codigo_pasajero: req.body.codigo_pasajero,
          nombres: req.body.nombres,
          apellidos: req.body.apellidos,
          fecha_registro : req.body.fecha_registro,
          nacionalidad : req.body.nacionalidad,
          numero_telefono : req.body.numero_telefono,
          email : req.body.email
    }
    console.log(pasajeros)
    pasajerosModel.post(pasajeros,(err) => {
           if (err) 
           {
              let locals = {
               title: 'Error al salvar el registro con el id: ${pasajeros.codigo_pasajeros',
               description: 'error de sintaxis SQL',
               error: err
               }
                res.satatus(520).json(err);
           } 
           else  
           {
            res.send('pasajeros ingresados de forma correcta')
           }

        } )
    }
            pasajerosModel.delete(pasajeros, (err,rows) => {
             console.log(err, '---', rows, locals)
                if(err)
                {
                    let locals = {
                      title: 'error al eliminar el registro del pasajero',
                      description: 'error de sintaxis SQL',
                      error: err
                    }
                    res.render('error', locals)
                }
               else
                {
                    res.dend('Pasajeros eliminados de forma correcta')

                }
               
            } )
        


         PasajerosController.addForm = (req, res, next) => 
            res.render('add-pasajeros', {title: 'Aguregar pasajero'}) 

           pasajerosController.error404 = (req, res, next) => {
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
module.exports = pasajerosController;