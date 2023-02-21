const express = require("express");
const crypto = require("crypto"); // for generating randum user id strings
const game = require("../game"); // game is where the active sessions are kept
const router = express.Router();

// Listen for get requests on the register route, and pass to game for login.
router.get("/", (req, res) => {
  const uuid = crypto.randomUUID();
  game.login(uuid);
  res.json({ id: uuid });
});

// Make the router available for use outside this module.
module.exports = router;
