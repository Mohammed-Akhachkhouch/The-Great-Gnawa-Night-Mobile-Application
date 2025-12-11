import { DataTypes } from "sequelize";
import checker from "../config/database.js";
import Artist from "./artist.js";

const Booking = checker.define("Booking", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ticket_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  seats: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

Booking.belongsTo(Artist, { foreignKey: "artistId" });
Artist.hasMany(Booking, { foreignKey: "artistId" });

export default Booking;
