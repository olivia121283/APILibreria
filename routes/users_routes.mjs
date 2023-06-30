import { createUser, login} from '../controllers/user_controller.mjs'
import {Router} from 'express';
const router = Router();


router.post('/createUser', createUser)
router.get('/login', login)


export default router;
