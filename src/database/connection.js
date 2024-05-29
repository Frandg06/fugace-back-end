import Sequelize from "sequelize";

export const sequelize = new Sequelize("fugace", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});
