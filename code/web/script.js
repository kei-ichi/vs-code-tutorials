const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

function convertCelsiusToFahrenheit(celsius) {
  // The formula for converting Celsius to Fahrenheit is: (Celsius * 9/5) + 32
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

// Example usage:
const celsiusTemperature = 25;
const fahrenheitTemperature = convertCelsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`); // Output: 25°C is equal to 77°F