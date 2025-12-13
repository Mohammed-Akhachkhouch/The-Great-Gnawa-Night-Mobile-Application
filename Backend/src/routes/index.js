import {Router} from 'express';
import {geteventcontroller, } from '../controllers/eventController.js';
import { getartistsbyidController, getArtistsController } from '../controllers/artistsController.js';
import { creatBookingController, getBookingByCodeController, getBookingsByEmailController } from '../controllers/bookingsController.js';




const router = Router();

router.get('/events', geteventcontroller);

router.get('/artists',getArtistsController );
router.get('/artists/:id', getartistsbyidController);

router.post('/bookings', creatBookingController);


router.get('/booking/:code', getBookingByCodeController);
router.get('/booking/email/:email', getBookingsByEmailController);


export default router;



