import { sequelize } from "../connection.js";
import { DataTypes, UUIDV4 } from "sequelize";

export const UserSocialNetwork = sequelize.define(
  "user_social_networks",
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
    social_network_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "social_networks",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);
