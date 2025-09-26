require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const mongoUri = process.env.MONGO_URI || process.env.MONGO_PUBLIC_URL;

if (!mongoUri) {
  console.error("Missing MONGO_URI/MONGO_PUBLIC_URL");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
const teamRoutes = require("./routes/teams");
const playerRoutes = require("./routes/players");

app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
