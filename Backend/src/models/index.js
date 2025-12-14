import checker from "../config/database.js";
import Artist from "./artist.js";
import Booking from "./booking.js";
import EventInfo from "./eventInfo.js";



Artist.hasMany(Booking, { foreignKey: "artistId", onDelete: "CASCADE" });
Booking.belongsTo(Artist, { foreignKey: "artistId" });


export { checker, Artist, Booking, EventInfo };



