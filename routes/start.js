const express = require("express");
const game = require("../game"); // game is where active sessions are kept
const router = express.Router();

// Listen for posts to the start route, and pass pertinent json to game
router.post("/", (req, res) => {
  game.start(req.body.id, req.body.minYear, req.body.maxYear, res);
});

// Make the router available for use outside this module.
module.exports = router;
