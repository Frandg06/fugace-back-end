import { sequelize } from "../connection.js";
import { DataTypes, UUIDV4 } from "sequelize";

export const Role = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);
