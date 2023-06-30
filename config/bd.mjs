import  mongoose from "mongoose";

const uri = "mongodb+srv://omunozca:FtQct18p5o5SqOQQ@cluster0.vjnw72h.mongodb.net/Libreria"

const options = {
  autoIndex: true,
  serverSelectionTimeoutMS: 5000,
}

const execute = () => {
    mongoose.connect(uri,options)
.then(() => {
    console.log('Conexion ok')
})
.catch((error) => {
    console.error(error)
})

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Error en la conexion a Mongo DB'));
db.once('open', () => {
    console.log("Me conecte ok, mongodb")
});
};

export {execute}
