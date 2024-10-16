function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var unit = document.getElementById("units").value;

    if (unit === "cm") {
        height = height / 100;
    }

    var bmi = weight / (height * height);
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
