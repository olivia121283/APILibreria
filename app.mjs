import express from 'express'
import {execute} from './config/bd.mjs'
import {librosRoute} from './routes/index.mjs'
import {usersRoutes} from './routes/index.mjs'

import bodyParser from 'body-parser'

var app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(librosRoute)
app.use(usersRoutes)
app.set('view engine', 'ejs');

 execute()

app.listen(3000, () => {
  console.log("El servidor esta corriendo en el 3000")
})
