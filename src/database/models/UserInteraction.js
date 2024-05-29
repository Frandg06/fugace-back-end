import { sequelize } from "../connection.js";
import { DataTypes, UUIDV4 } from "sequelize";

export const UserInteraction = sequelize.define(
  "user_interactions",
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
    interaction_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "interactions",
        key: "id",
      },
    },
    interaction_user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);
