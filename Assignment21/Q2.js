// Create a new XMLHttpRequest object
var xhttp = new XMLHttpRequest();

// Define the callback function to handle the response
xhttp.onreadystatechange = function() {
  // Check if the request is complete and the response is ready
  if (this.readyState == 4 && this.status == 200) {
    // Parse the response JSON data
    var users = JSON.parse(this.responseText);
    
    // Log a list of user names to the console
    console.log("List of user names:");
    users.forEach(function(user) {
      console.log(user.name);
    });
    
    // Output the list of user names to the browser console (optional)
    document.getElementById("output").innerText = users.map(function(user) {
      return user.name;
    }).join(", ");
  }
};

// Open a GET request to the remote API endpoint
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

// Send the request
xhttp.send();

