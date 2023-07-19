'use strict'

//CONTROL GET ALL
var VueloModel = require('../models/vuelo-models'),
    VueloController = () => {}

    VueloController.getAll = (req, res, next)  => {
        VueloModel.getAll((err, rows)  => {
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
                    litle: 'Lista de Vuelos',
                    data: rows
                }
                res.status(200).send(rows.rows)
            }
        })
    }
    // CONTROL GET ONE
    VueloController.getOne = (req, res, next) => {
        let Vuelos =  req.body.codigo_vuelo
        console.log(Vuelo)

        VueloModel.getOne(Vuelo, (err, rows) => {
            console.log(err, '---', rows)
            if(err)
            {
                let locals = {
                    litle: 'Error al consultar la base de datos con el id: ${Vuelo.codigo_vuelo} ',
                    descripcion: 'Error de sintaxis SQL',
                    error: err
                }
                res.render('error', locals)
                
            }
            else
            {
               let locals = {
                litle: ' Editar Vuelo',
                data: rows
               }
               res.status(200).send(rows.rows) 
            }
        })
    }
    //CONTROL INSERTAR
    VueloController.post = (req, res, next) => {
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
               litle: 'Error al salvar el registro con el id: ${Vuelo.codigo_vuelo',
               description: 'Error de sintaxis SQL',
               error: err
               }
                res.satatus(520).json(err);
           } 
           else  
           {
            res.send('El Vuelo se ha ingresado correctamente')
           }

        } )
    }
    //CONTROL UPDATE
  VueloController.put = (req, res, next) => {
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
            litle: "Eerror al actualizar el registro con el id ${Vuelo.codigo_vuelo}",
            description: "Error de sintaxis SQL",
            error: err
          }
          res.status(520).json(err);
        }
        else
        {
           res.send("El Vuelo se ha actualizado correctamente")
        }
    } )
}

//CONTROL DELETE
VueloController.delete = (req, res, next) =>{
    let codigo_vuelo = req.body.codigo_vuelo
    console.log(codigo_vuelo)


    VueloModel.delete(codigo_vuelo, (err) => {

      if (err) {
        let locals = {
          litle: "error al eliminar el registro del pasajero id: {codigo_vuelo",
          description: "error de sintaxis SQL",
          error: err
        }
        res.status(520).json(err);

      } 
      else 
      {
        res.send("El Vuelo se ha eliminado correctamente");
      }
    })
        
}

VueloController.addForm = (req, res, next) => 
res.render('add-vuelo', {litle: 'Agregar vuelo'}) 

VueloController.error404 = (req, res, next) => {
     let error = new Error(),
     locals = {
        litle: 'Error 404',
        description: 'no se encontro el vuelo',
        error: error
    }
    error.status = 404

    res.render("error", locals)

    next()
    

}

module.exports = VueloController;