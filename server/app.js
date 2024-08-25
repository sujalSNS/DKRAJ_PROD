const express = require("express");
const cors = require("cors");
const app = express();

const {
  errorHandler,
  handleUncaughtExceptions,
  handleUnhandledRejections,
} = require("./middlewares/errorHandler.js");

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Routes Import
const user = require("./routes/userRoutes.js");
const product = require("./routes/productRoutes.js");
const wishlist = require("./routes/wishlistRoutes.js");

app.use("/api", user);
app.use("/api", product);
app.use("/api/v3/wishlist", wishlist);

app.use(errorHandler);
 
handleUnhandledRejections();
handleUncaughtExceptions();

// healthcheck
app.get("/api/test", (req, res) => {
  res.send("Everything Fine");
});

module.exports = app;
