// Specify a port on which the server will listen.
const PORT = 3000;

// For express.
const express = require("express");
const app = express();

// Routes to be loaded.
const home = require("./routes/home");
const start = require("./routes/start");
const register = require("./routes/register");

// If Content-Type is json, then parse and append key:value pairs to body.
app.use(express.json());

// Use routes.
app.use("/", home);
app.use("/start", start);
app.use("/register", register);

// Handle invalid URL.
app.all("*", (req, res) => {
  res.send("Invalid URL"); // TODO: serve an error page.
});

// Start server.
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
