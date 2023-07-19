'use strict'

//GET ALL ...

var PasajerosModel = require('../models/pasajeros-models'),
    PasajerosController = () => {}

    PasajerosController.getAll = (req, res, next)  => {
        PasajerosModel.getAll((err, rows)  => {
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
                let locals = {
                    litle: 'Lista de Pasajeros',
                    data: rows
                }
                res.status(200).send(rows.rows)
            }
        })
    }
    //GET ONE
    PasajerosController.getOne = (req, res, next) => {
        let Pasajeros =  req.body.codigo_pasajero
        console.log(pasajeros)

        PasajerosModel.getOne(pasajeros, (err, rows) => {
            console.log(err, '---', rows)
            if(err)
            {
                let locals = {
                    litle: 'Error al consultar la base de datos con el id: ${pasajeros.codigo_pasajero} ',
                    descripcion: 'Error de sintaxis SQL',
                    error: err
                }
                res.render('error', locals)
                
            }
            else
            {
               let locals = {
                litle: ' Editar Pasajero',
                data: rows
               }
               res.status(200).send(rows.rows) 
            }
        })
    }
    //INSERTAR
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
               litle: 'Error al salvar el registro con el id: ${pasajeros.codigo_pasajeros',
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
    //UPDATE
  PasajerosController.put = (req, res, next) => {
      let pasajeros = {
        codigo_pasajero: req.body.codigo_pasajero,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        fecha_registro: req.body.fecha_registro,
        nacionalidad: req.body.nacionalidad,
        numero_telefono: req.body.numero_telefono,
        email: req.body.email
      }

      console.log(pasajeros)

      pasajerosModel.put(pasajeros, (err) => {
        if(err)
        {
          let locals = {
            litle: "Eerror al actualizar el registro con el id ${Pasajeros.codigo_pasajeros}",
            description: "Error de sintaxis SQL",
            error: err
          }
          res.status(520).json(err);
        }
        else
        {
           res.send("Actualizacion correcta de pasajeros")
        }
    } )
}

//DELETE
PasajerosController.delete = (req, res, next) =>{
    let codigo_pasajero = req.body.codigo_pasajero
    console.log(codigo_pasajero)


    pasajerosModel.delete(codigo_pasajero, (err) => {

      if (err) {
        let locals = {
          litle: "error al eliminar el registro del pasajero id: {codigo_pasajero",
          description: "error de sintaxis SQL",
          error: err
        }
        res.status(520).json(err);

      } 
      else 
      {
        res.send("Pasajeros eliminados de forma correcta");
      }
    })
        
}

PasajerosController.addForm = (req, res, next) => 
res.render('add-pasajeros', {litle: 'Agregar pasajero'}) 

PasajerosController.error404 = (req, res, next) => {
     let error = new Error(),
     locals = {
        litle: 'Error 404',
        description: 'no se encontro el pasajero',
        error: error
    }
    error.status = 404

    res.render("error", locals)

    next()
    

}
module.exports = PasajerosController;