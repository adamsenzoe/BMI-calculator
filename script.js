

// fungsi kalkulasi nilai berat badan dan tinggi badan
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = weight / Math.pow(height / 100, 2);

    let status;
    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obesity';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `BMI: ${bmi.toFixed(2)} - Status: ${status}`;
}

// fungsi reset nilai 

function resetValues() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerHTML = '';
}