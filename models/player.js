const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    team_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { collection: "players" }
);

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
