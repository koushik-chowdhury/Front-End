//BMI calculation
function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var unit = document.getElementById("units").value;
    
    if (unit === "cm") {
        height = height / 100;
    }

    var bmi = weight / (height * height);

    if (height <= 0) {
        alert("Please enter a valid positive height.");
        return;
    }
    if (weight <= 0) {
        alert("Please enter a valid positive weight.");
        return;
    }

    bmi = bmi.toFixed(2); // Round to two decimal places

    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById("bmiResult").innerText = "Your BMI: " + bmi;
}

//toggle dark mode
function toggleDarkMode() {
    const bodyElement = document.body;
    const containerElement = document.querySelector('.container');
    const containerTitle = document.querySelector('.Title');
    
    if (document.getElementById('darkModeToggle').checked) {
        // Dark mode ON
        bodyElement.style.backgroundColor = 'white';  // Background is white now
        containerElement.style.backgroundColor = '#0B0B0B'; // Container is black now
        containerElement.style.color = 'white';//Text is white now
        containerTitle.style.color = "white";//Title is white now 
    } else {
        // Dark mode OFF
        bodyElement.style.backgroundColor = '#0B0B0B';  // Background is black now
        containerElement.style.backgroundColor = 'white'; // Container is white now
        containerElement.style.color = 'black';//Text is black now
        containerTitle.style.color = "black";//Title is black now 
    }
}

// Run toggleDarkMode
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

