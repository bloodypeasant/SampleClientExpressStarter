const fs = require("fs").promises; // for reading files asynchronously

const states = ["Alaska", "Kansas", "Wisconsin"]; // TODO: more, obviously
const years = [
  1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020,
]; // TODO: more, obviously

const games = {}; // this is where any active sessions will be kept

// class representing individual game sessions
class Game {
  constructor() {
    this.state = undefined; // for state when it is randomly chosen
    this.year = undefined; // for year when it is randomly chosen
    this.minYear = undefined; // to store user's minimum year when received
    this.maxYear = undefined; // to store user's maximum year when received
  }
  // Choose a random state
  chooseRandomState() {
    this.state = "Kansas"; // TODO -- Make random.
  }
  // Choose a random year
  chooseRandomYear() {
    this.year = 2000; // TODO -- Make random.
  }
  // Set maximum year
  setMaxYear(maxYear) {
    this.maxYear = maxYear;
  }
  // Set minimum year
  setMinYear(minYear) {
    this.minyear = minYear;
  }
}

// exported for other modules to call when a user is logging in
function login(id) {
  games[id] = new Game();
}

// exported for other modules to call when a user is logging out
function logout(id) {
  delete games[id];
}

// exported for other modules to call when user clicks the start button
function start(id, minYear, maxYear, res) {
  // Validate the id passed in; do not proceed if the id is invalid.
  if (!games[id]) {
    console.log("BAD ID"); // TODO: handle better -- e.g., error page.
    return;
  }

  // Set the various attributes of the user's game.
  games[id].setMinYear(minYear);
  games[id].setMaxYear(maxYear);
  games[id].chooseRandomState();
  games[id].chooseRandomYear();

  // TODO: This is where an appropriate map would be selected.
  // Also need to record this in the user's session attributes, etc.
  fs.readFile("./private/secret-map.jpg").then((file) => {
    res.contentType("image/jpeg");
    res.send(file);
    console.log("HERE");
  });
}

// These functinos are made publicly available to other modules.
module.exports = {
  login,
  logout,
  start,
};
