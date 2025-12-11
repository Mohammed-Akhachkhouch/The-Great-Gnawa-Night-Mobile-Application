import { DataTypes } from "sequelize";
import checker from "../config/database.js";

const Artist = checker.define("Artist", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
  },
  photo: {
    type: DataTypes.STRING,
  },
  performance_time: {
    type: DataTypes.DATE,
  },
});

export default Artist;
