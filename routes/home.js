const express = require("express");
const router = express.Router();

// Serve static files from public directory.
router.use(express.static("public"));

// Make the router available for use outside this module.
module.exports = router;
