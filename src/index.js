function refreshWeather(reponse) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(reponse.data.temperature.current);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = reponse.data.city;
}

function searchCity(city) {
  let apiKey = "14b3e71od6df40977d863a00tdaeb6ef";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=" +
    city +
    "&key=" +
    apiKey;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Toronto");
