import {Router} from 'express';
import {geteventcontroller} from '../controllers/eventController.js';



const router = Router();

router.get('/api/event', geteventcontroller);


export default router;