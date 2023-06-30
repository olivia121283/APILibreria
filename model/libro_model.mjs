import  mongoose from "mongoose";

const LibrosShema = mongoose.Schema({
  titulo: String,
  autor: String,
  paginas: Number,
  descripcion: String
})

const LibrosModel = mongoose.model('libros', LibrosShema);
export default  LibrosModel;



