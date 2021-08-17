var apiKey = `e59237408fbdfe54dda7ee71ee1dabd9`
var defaultUnits = `&units=imperial`


var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-input");
var cityWeatherSearch = document.querySelector("#search-city-weather");
var cityUvi = document.querySelector(".city-uvi");
var Forecast = document.querySelector(".five-day-container");
var Forecast1 = document.querySelector("#Forecast1");
var Forecast2 = document.querySelector("#Forecast2");
var Forecast3 = document.querySelector("#Forecast3");
var Forecast4 = document.querySelector("#Forecast4");
var Forecast5 = document.querySelector("#Forecast5");



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
                localStorage.setItem('city', city)

                var displayCurrentDate = document.querySelector(".city-current-date");
                var currentDate = moment();
                displayCurrentDate.textContent = currentDate.format("(L)");

                var currentDate = moment();
                console.log(currentDate.format())

                var cityName = localStorage.getItem('city')
                cityName = document.createElement("h2")
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

                        var forecastDay1 = moment().add(1, 'days')
                        var temp1 = response.daily[0].temp.day
                        var wind1 = response.daily[0].wind_speed
                        var humidity1 = response.daily[0].humidity
                        var icon1 = "https://openweathermap.org/img/w/" + response.daily[0].weather[0].icon + ".png"
                        
                        var forecastDay2 = moment().add(2, 'days')
                        var temp2 = response.daily[1].temp.day
                        var wind2 = response.daily[1].wind_speed
                        var humidity2 = response.daily[1].humidity
                        var icon2 = "https://openweathermap.org/img/w/" + response.daily[1].weather[0].icon + ".png"

                        var forecastDay3 = moment().add(3, 'days')
                        var temp3 = response.daily[2].temp.day
                        var wind3 = response.daily[2].wind_speed
                        var humidity3 = response.daily[2].humidity
                        var icon3 = "https://openweathermap.org/img/w/" + response.daily[2].weather[0].icon + ".png"

                        var forecastDay4 = moment().add(4, 'days')
                        var temp4 = response.daily[3].temp.day
                        var wind4 = response.daily[3].wind_speed
                        var humidity4 = response.daily[3].humidity
                        var icon4 = "https://openweathermap.org/img/w/" + response.daily[3].weather[0].icon + ".png"

                        var forecastDay5 = moment().add(5, 'days')
                        var temp5 = response.daily[4].temp.day
                        var wind5 = response.daily[4].wind_speed
                        var humidity5 = response.daily[4].humidity
                        var icon5 = "https://openweathermap.org/img/w/" + response.daily[4].weather[0].icon + ".png"

                        $(`<div class="card">
    <div class="card-header">
        <h2 class="card-title">${forecastDay1.format("L")}</h2>
        <h3 class="card-title"><img class="card-img-top" src="${icon1}" alt=""></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Temp: ${temp1} °F</li>
            <li class="list-group-item">Wind: ${wind1} MPH</li>
            <li class="list-group-item">Humd: ${humidity1} %</li>
        </ul>
    </div>
</div>
`).appendTo(Forecast)

$(`<div class="card">
    <div class="card-header">
        <h2 class="card-title">${forecastDay2.format("L")}</h2>
        <h3 class="card-title"><img class="card-img-top" src="${icon2}" alt=""></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Temp: ${temp2} °F</li>
            <li class="list-group-item">Wind: ${wind2} MPH</li>
            <li class="list-group-item">Humd: ${humidity2} %</li>
        </ul>
    </div>
</div>
`).appendTo(Forecast)

$(`<div class="card">
    <div class="card-header">
        <h2 class="card-title">${forecastDay3.format("L")}</h2>
        <h3 class="card-title"><img class="card-img-top" src="${icon3}" alt=""></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Temp: ${temp3} °F</li>
            <li class="list-group-item">Wind: ${wind3} MPH</li>
            <li class="list-group-item">Humd: ${humidity3} %</li>
        </ul>
    </div>
</div>
`).appendTo(Forecast)
$(`<div class="card">
    <div class="card-header">
        <h2 class="card-title">${forecastDay4.format("L")}</h2>
        <h3 class="card-title"><img class="card-img-top" src="${icon4}" alt=""></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Temp: ${temp4} °F</li>
            <li class="list-group-item">Wind: ${wind4} MPH</li>
            <li class="list-group-item">Humd: ${humidity4} %</li>
        </ul>
    </div>
</div>
`).appendTo(Forecast)
$(`<div class="card">
    <div class="card-header">
        <h2 class="card-title">${forecastDay5.format("L")}</h2>
        <h3 class="card-title"><img class="card-img-top" src="${icon5}" alt=""></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Temp: ${temp5} °F</li>
            <li class="list-group-item">Wind: ${wind5} MPH</li>
            <li class="list-group-item">Humd: ${humidity5} %</li>
        </ul>
    </div>
</div>
`).appendTo(Forecast)

     


                    });
            }
        });

};


// search button 
userFormEl.addEventListener("submit", formSubmitHandler);


   

   
