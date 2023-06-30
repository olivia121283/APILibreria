import LibrosModel  from '../model/libro_model.mjs'
import LibrosShema from '../model/libro_model.mjs'

const showLibros = (req, res) => {
const consulta = LibrosModel.find({})

consulta.exec()
.then((libros) => {
  //res.json(libros)
  res.render('index',{libros});
})
.catch((error) => {
  res.json({'message': error})
})
}

const addLibro = (req, res) => {
  const {titulo, autor, paginas, descripcion} = req.body
  const libro = new LibrosShema({titulo, autor, paginas, descripcion})
 
  libro.save()
  .then((resultado) => {
    res.json({"message": resultado});
  })
  .catch((error) => {
    res.json({'message': error})
  })
  }
  
  const deleteLibro =  (req, res) => {
    const { id } = req.params

    LibrosModel.findByIdAndRemove(id)
  .then((resultado) => {
    res.json({'message': resultado});
  })
  .catch((error) => {
    res.json({'message':error})
  })
};
const updateLibro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, paginas, descripcion } = req.body
  let query = LibrosModel.findByIdAndUpdate(id, {titulo, autor, paginas, descripcion})
  query.exec()
  .then((resultado) => {
    res.json({'message': resultado});
  })
  .catch((error) => {
    res.json({'message':error})
  })
}


    export { showLibros, addLibro, deleteLibro, updateLibro}

