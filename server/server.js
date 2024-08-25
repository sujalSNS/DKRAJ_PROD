const app = require("./app.js");
const dotenv = require("dotenv");
const { sequelize } = require("./models");

dotenv.config({ path: "./config/config.env" });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized!");
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
