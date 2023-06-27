const mongoose = require("mongoose")


const Schema = mongoose.Schema

const LibrosShema = new Schema({
  titulo: String,
  Autor: String,
  Páginas: Number,
  Descripción: String
})

const LibrosModel = mongoose.model('libros', LibrosShema);
module.exports = LibrosModel;