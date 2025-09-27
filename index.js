require("dotenv").config();
const express = require("express");
const { connectDB } = require("./db");

const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// mongoose
//   .connect("mongodb://localhost:27017/FootballDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));
(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error(" DB connection failed:", err.message);
    process.exit(1);
  }
})();

const teamRoutes = require("./routes/teams");
const playerRoutes = require("./routes/players");

app.use("/teams", teamRoutes);
app.use("/players", playerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
