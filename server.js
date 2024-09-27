const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("dotenv");
const routers = require("./router/route");
const conected = require("./database/database");
const path = require("path");
const app = express();
/** app middlwares  */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

// Route
app.use("/static", express.static(path.join(__dirname, "database/image")));
app.use("/api", routers);

// appliaction port */
const port = process.env.PORT || 8080;

conected()
  .then(() => {
    console.log("conect database");
    try {
      app.listen(port, () => {
        console.log(`I am listening  on http://localhost:${port}`);
      });
    } catch (error) {
      console.log("error: no listening", error);
    }
  })
  .catch((error) => {
    console.log("error :not conect database mongodb", error);
  });
