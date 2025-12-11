import dotenv from 'dotenv';
dotenv.config();

import checker from "./src/config/database.js";
import Artist from "./src/models/artist.js";
import Booking from "./src/models/booking.js";
import EventInfo from "./src/models/eventInfo.js";
import app from './app.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
      
        await checker.authenticate();
        console.log("✅ Database connected successfully");

     
        await checker.sync({ alter: true });
        console.log("✅ Tables are synchronized");

       
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Error starting server:", error);
        process.exit(1);
    }
}

startServer();
