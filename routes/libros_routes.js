const express = require('express')
const router = express.Router()


const libroController = require('../controllers/libros_controller.js')



router.get('/', libroController.showLibros)

module.exports = router



