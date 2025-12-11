import { DataTypes } from "sequelize";
import checker from "../config/database.js";

const EventInfo = checker.define("EventInfo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  banner: {
    type: DataTypes.STRING,
  },
});

export default EventInfo;
