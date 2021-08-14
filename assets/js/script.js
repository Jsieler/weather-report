var apiKey = `e59237408fbdfe54dda7ee71ee1dabd9`
var defaultCity = `Salt Lake City`
var defaultUnits = `&units=imperial`

var currentWeatherEl=document.querySelector("#current-weather");

fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=-111.8911${defaultUnits}&appid=${apiKey}`
  )   .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      
      var temp = document.createElement("p")
      temp.textContent = "Temp:" + response.current.temp

      var windSpeed = document.createElement("p")
      windSpeed.textContent = "Wind Speed:" + response.current.wind_speed + 'MPH'

      var humidity = document.createElement("p")
      humidity.textContent = "Humidity:" + response.current.humidity + '%'

      var uvi = document.createElement("p")
      uvi.textContent = "UVI Index:" + response.current.uvi

      currentWeatherEl.append(temp,windSpeed,humidity,uvi)
    });