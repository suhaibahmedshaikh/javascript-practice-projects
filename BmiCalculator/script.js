window.onload = () => {
  const button = document.querySelector("#btn");

  button.addEventListener("click", calculateBmi);
};

function calculateBmi() {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");

  if (!height || isNaN(height) || height < 0) {
    result.textContent = "Enter valid height in centimeter";
    return;
  } else if (!weight || isNaN(weight) || weight < 0) {
    result.textContent = "Enter valid weight in kilogram";
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.5) {
    result.textContent = `Under Weight: ${bmi}`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.textContent = `Normal Weight: ${bmi}`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.textContent = `Over Weight: ${bmi}`;
  } else if (bmi >= 30 && bmi <= 34.9) {
    result.textContent = `Obesity Class I: ${bmi}`;
  } else if (bmi >= 35 && bmi <= 39.9) {
    result.textContent = `Obesity Class II: ${bmi}`;
  } else {
    result.textContent = `Extreme Obesity: ${bmi}`;
  }
}
