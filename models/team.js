const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    founded: {
      type: Number,
      required: true,
    },
  },
  { collection: "teams" }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
