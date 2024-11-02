// Get references to the input fields and the submit button
let lengthInput = document.getElementById("length");
let widthInput = document.getElementById("width");
let submit = document.getElementById("submit");
let area; // Variable to store the calculated area
let areaDiv; // Variable to hold the area result div

// Regular expression to validate that input is a non-negative integer
const numberPattern = /^\d*\.?\d*$/;

// A reusable function to validate input
function validateInput(inputField) {
  // If the input does not match the number pattern, clear it
  if (!numberPattern.test(inputField.value)) {
    inputField.value = ""; // Clear the invalid input
  }
}

// Add event listeners to both input fields for real-time validation
lengthInput.addEventListener("input", () => validateInput(lengthInput));

// Add keydown event listeners to both input fields
lengthInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validateInput(lengthInput);
    widthInput.focus();
  }
});
widthInput.addEventListener("input", () => validateInput(widthInput));
widthInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    validateInput(widthInput);
    Area();
  }
});

// Function to calculate the area when the submit button is clicked
function Area() {
  // Check if both length and width have values
  if (lengthInput.value && widthInput.value) {
    // Calculate the area
    area = parseFloat(lengthInput.value) * parseFloat(widthInput.value);

    // Create a new div to display the result
    areaDiv = document.createElement("div");
    areaDiv.className = "divStyle"; // Assign a CSS class for styling

    // Create a paragraph element for the area text
    const divContent = document.createElement("p");
    divContent.innerHTML = `Area is ${area} unit<sup>2</sup>`; // Set the text content

    // Append the paragraph to the div
    areaDiv.appendChild(divContent);
    // Append the div to the body of the document
    document.body.appendChild(areaDiv);

    // Clear the input fields after showing the result
    lengthInput.value = "";
    widthInput.value = "";
  } else {
    // Alert the user to enter both length and width
    alert("Please add input values for both length and width.");
  }
}

// Add an event listener to the submit button to calculate the area
submit.addEventListener("click", Area);

// Function to remove the areaDiv when an input field is focused
function removeAreaDiv() {
  if (areaDiv) {
    areaDiv.remove(); // Remove the result div from the DOM
    areaDiv = null; // Set areaDiv to null so it can be created again if needed
  }
}

// Add focus event listeners to both input fields to remove the areaDiv
lengthInput.addEventListener("focus", removeAreaDiv);
widthInput.addEventListener("focus", removeAreaDiv);

// Go to Home
let home = document.getElementById("home");

// Add a click event listener to the button
home.addEventListener("click", () => {
  // Redirect to the specified location
  window.location.href = "../../../index.html";
});
