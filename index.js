require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const uri =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI
    : process.env.MONGO_PUBLIC_URL;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const teamRoutes = require("./routes/teams");
const playerRoutes = require("./routes/players");

app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
