import express from 'express';
import router from './src/routes/index.js'; 

const app = express();

app.use(express.json());
app.use("/api", router);
app.use("/uploads", express.static("uploads"));
// router.get("/bookings/email/:email", getBookingsByEmailController);
// router.get('/booking/:code', getBookingByCodeController);



export default app;
