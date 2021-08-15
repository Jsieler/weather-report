var apiKey = `e59237408fbdfe54dda7ee71ee1dabd9`
var defaultUnits = `&units=imperial`


var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-input");
var cityWeatherSearch = document.querySelector("#search-city-weather");
var cityUvi = document.querySelector(".city-uvi");


var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${defaultUnits}&appid=${apiKey}`
    ).then(function (response) {
        return response.json();

    })
        .then(function (response, lat, lon) {
            var lon = response.coord.lon
            var lat = response.coord.lat
            console.log(lon, lat)
            console.log(response);
            if (city) {
                cityInputEl.value = "";

                var displayCurrentDate = document.querySelector(".city-current-date");
                var currentDate = moment();
                displayCurrentDate.textContent = currentDate.format("(L)");

                var currentDate = moment();
                console.log(currentDate.format())

                var cityName = document.createElement("h2")
                cityName.textContent = response.name

                var temp = document.createElement("p")
                temp.textContent = " Temp: " + response.main.temp + ' °F'

                var windSpeed = document.createElement("p")
                windSpeed.textContent = " Wind Speed: " + response.wind.speed + ' MPH'

                var humidity = document.createElement("p")
                humidity.textContent = " Humidity: " + response.main.humidity + ' %'


                cityWeatherSearch.append(cityName, temp, windSpeed, humidity)

                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}${defaultUnits}&appid=${apiKey}`
                ).then(function (response) {
                    return response.json();
                })
                    .then(function (response) {
                        console.log(response);

                        var uvi = document.createElement("p")
                        uvi.textContent = " UV Index: " + response.current.uvi


                        cityUvi.append(uvi)
                    });
            }
        });

};


// search button 
userFormEl.addEventListener("submit", formSubmitHandler);


   

   
