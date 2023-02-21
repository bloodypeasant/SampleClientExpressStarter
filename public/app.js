// To hold the session id when retrieved at load time.
let id;

// First function to run when page loads.
onload = () => {
  // Register with the server, then initialize the HTML elements, etc.
  register().then(() => initialize());
};

// Register, to retrieve a session id.
async function register() {
  await fetch("register")
    .then((response) => response.json()) // expecting json from the response
    .then((json) => (id = json.id));
}

// Handle user clicking the start button.
function handleStart() {
  // Convert the minimum and maximum year values to numbers.
  const minYear = Number(document.getElementById("min-year").value);
  const maxYear = Number(document.getElementById("max-year").value);

  // Call the "start" route on the server as a "POST", passing json.
  fetch("start", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, minYear, maxYear }), // include id & year-range
  })
    .then((response) => response.blob()) // expecting an image blob as response
    .then((blob) => URL.createObjectURL(blob)) // craete a url for the image
    .then((url) => (document.getElementById("main-img").src = url)); // display
}

// Set up event listeners, etc.
function initialize() {
  document
    .getElementById("start-button")
    .addEventListener("click", handleStart);
}
