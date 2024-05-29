import { sequelize } from "../connection.js";
import { DataTypes, UUIDV4 } from "sequelize";

export const UserHobbie = sequelize.define(
  "user_hobbies",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    hobbie_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "hobbies",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);
