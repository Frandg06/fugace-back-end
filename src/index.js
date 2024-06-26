import app from "./app.js";
import { sequelize } from "./database/connection.js";
import "./database/models/Associations.js";

async function main() {
  try {
    await sequelize.sync();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error.message);
  }
}

main();
