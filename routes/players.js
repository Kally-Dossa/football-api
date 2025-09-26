const express = require("express");
const Player = require("../models/player");
const Team = require("../models/team");
const router = express.Router();

router.post("/", async (req, res) => {
  const teamName = req.body.team_name;

  const team = await Team.findOne({ name: teamName });

  if (!team) {
    return res.status(400).json({ message: "Team not found" });
  }

  const player = new Player({
    name: req.body.name,
    position: req.body.position,
    team_id: team._id,
    age: req.body.age,
  });

  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const players = await Player.find().populate("team_id");
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id).populate("team_id");
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    player.name = req.body.name || player.name;
    player.position = req.body.position || player.position;
    player.age = req.body.age || player.age;

    if (req.body.team_id) {
      const team = await Team.findById(req.body.team_id);
      if (!team) {
        return res.status(400).json({ message: "Team not found" });
      }
      player.team_id = req.body.team_id;
    }

    const updatedPlayer = await player.save();
    res.json(updatedPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    await player.remove();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
