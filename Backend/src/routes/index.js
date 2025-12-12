import {Router} from 'express';
import {geteventcontroller, } from '../controllers/eventController.js';
import { getartistsbyidController, getArtistsController } from '../controllers/artistsController.js';
import { creatBookingController, getBookingByCodeController, getBookingsByEmailController } from '../controllers/bookingsController.js';





const router = Router();

router.get('/api/events', geteventcontroller);

router.get('/api/artists',getArtistsController );
router.get('/api/artist/:id', getartistsbyidController);

router.post('/api/booking', creatBookingController);
router.get('/api/booking/:code', getBookingByCodeController);
router.get('/api/booking/email/:email', getBookingsByEmailController);


export default router;