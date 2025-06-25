function calculateBMI() {
  const mass = parseFloat(document.getElementById('mass').value);
  const height = parseFloat(document.getElementById('height').value);
  const outputDiv = document.getElementById('output');

  if (isNaN(mass) || isNaN(height) || mass <= 0 || height <= 0) {
    outputDiv.innerHTML = `<p style="color: red;">Please enter valid mass and height.</p>`;
    return;
  }

  const bmi = mass / (height * height);
  let category = '';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  outputDiv.innerHTML = `
    <p>Your BMI is <strong>${bmi.toFixed(2)}</strong></p>
    <p>Category: <strong>${category}</strong></p>
  `;
}
