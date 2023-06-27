const LibrosModel = require('../model/libro_model.js')

module.exports.showLibros = (req, res) => {
const consulta = LibrosModel.find({})

consulta.exec()
.then((libros) => {
  res.json(libros);
})
.catch((error) => {
  res.json({'message': error})
})
}


