// Simple Login Simulation
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("Please enter both username and password");
  } else {
    alert("Login successful! Welcome " + user);
    window.location.href = "index.html";
  }
}

function register() {
  alert("Registration successful! You can now log in.");
}

// Simple Search Function
function searchHouses() {
  const query = document.getElementById("search").value.toLowerCase();
  const resultsDiv = document.getElementById("results");

  if (query === "") {
    resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
    return;
  }

  resultsDiv.innerHTML = `<p>Searching for houses with: <strong>${query}</strong>...</p>`;
}
// View Details Function
function viewDetails(houseName) {
  alert("You selected: " + houseName + "\nMore details coming soon!");
}
