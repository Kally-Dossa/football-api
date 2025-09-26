const express = require("express");
const router = express.Router();
const Team = require("../models/team");

router.post("/", async (req, res) => {
  const { name, country, founded } = req.body;

  if (!name || !country || !founded) {
    return res
      .status(400)
      .json({ message: "Name, country, and founded are required" });
  }

  try {
    const newTeam = new Team({ name, country, founded });
    await newTeam.save();
    res.status(201).json(newTeam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
