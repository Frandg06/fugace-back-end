import { DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../connection.js";

export const User = sequelize.define(
  "users",
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
    surnames: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    born_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    gender_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "genders",
        key: "id",
      },
    },
    sexual_orientation_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "sexual_orientations",
        key: "id",
      },
    },
    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
    },
    like_credits: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    super_like_credits: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
