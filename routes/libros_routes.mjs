
import { showLibros, addLibro, deleteLibro, updateLibro } from '../controllers/libros_controller.mjs'
import {Router} from 'express'
import verificar from '../middleware/middleware.mjs'


const router = Router()

router.get('/', verificar, showLibros)
router.post('/addlibros', addLibro)
router.delete('/deleteLibros/:id', deleteLibro)
router.post('/updateLibros/:id', updateLibro)

export default router



