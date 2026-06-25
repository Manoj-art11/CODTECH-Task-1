async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (!city) {
    result.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const response = await fetch(`https://wttr.in/${city}?format=j1`);
    const data = await response.json();

    const temp = data.current_condition[0].temp_C;
    const weather = data.current_condition[0].weatherDesc[0].value;
    const humidity = data.current_condition[0].humidity;

    result.innerHTML = `
      <h2>${city}</h2>
      <p> Temperature: ${temp}°C</p>
      <p> Weather: ${weather}</p>
      <p> Humidity: ${humidity}%</p>
    `;
  } catch (error) {
    result.innerHTML = "<p>Error fetching weather data.</p>";
  }
}