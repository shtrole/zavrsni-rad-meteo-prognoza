const s = selektor => document.getElementById(selektor);
const openWeatherMapId = 'e35f9d03b9cf7b1e57d49c09254d495b';

const message = s('current-weather-conditions')
const search = s('search');
const cityName = s('enter-location');
const locationTitle = s('location-title');
const temperatureDegree= s('temperature-degree');
const weatherIcon = s('weather-icon');
const weatherDescription = s('weather-description');
const temperatureMax = s('temperature-max');
const temperatureMin = s('temperature-min');
const pressure = s('pressure');
const humidity = s('humidity');
const windDirectionSpeed = s('wind-direction-speed');
const clouds = s('clouds');
const weekly = s('weekly');

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition, showError);
    } else { 
      document.getElementById("current-weather-conditions").innerHTML = "Unable to retrieve location. Try manual search.";
    }
  }

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
         document.getElementById("current-weather-conditions").innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        document.getElementById("current-weather-conditions").innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
         document.getElementById("current-weather-conditions").innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        document.getElementById("current-weather-conditions").innerHTML = "An unknown error occurred."
        break;
    }
  }

  function getPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;    
    
    const geoUrlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${openWeatherMapId}`;
    const geoUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&APPID=${openWeatherMapId}`;

    fetch(geoUrlWeather)
    .then(response => response.json() )
    .then(function (response) {
        locationTitle.innerHTML = response.name + ', ' + response.sys.country;
        temperatureDegree.innerHTML = response.main.temp.toFixed(0) + "&#186";
        weatherIcon.innerHTML = `<img src="${'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png'}" height="75">`;
        weatherDescription.innerHTML = response.weather[0].main;
        pressure.innerHTML = response.main.pressure + " mBar";
        humidity.innerHTML = response.main.humidity + " %";    
        console.log(response.wind.deg)
        windDirectionSpeed.innerHTML = degToDir(response.wind.deg) + "&nbsp&nbsp" + response.wind.speed + "m/s";
        clouds.innerHTML = response.clouds.all  + " %";
    })    
        
    fetch(geoUrlForecast)
    .then(response => response.json())
    .then(function (response) { 

        let dateOfWeek = "";
        const today = new Date().toISOString().slice(0, 10);
        const timeOfDayForCond = '15:00:00';

        // temperatureMax.innerHTML = response.list[0].main.temp_max.toFixed(0) + "&#186 <span> / </span>";
        // temperatureMin.innerHTML = response.list[0].main.temp_min.toFixed(0) + "&#186";            
        

        for (let i = 1; i <= 39; i++){
            if (response.list[i].dt_txt.slice(0,10) != today && response.list[i].dt_txt.slice(11,19) == timeOfDayForCond ){
               // console.log(response.list[i].dt_txt.slice(11,19));
            dateOfWeek += `
            <div>
                    <p class="date">${response.list[i].dt_txt.slice(0,10)}</p>
                    <img src="${'https://openweathermap.org/img/w/' + response.list[i].weather[0].icon + '.png'}">
                    <p class="predicted-weather-conditions">${response.list[i].weather[0].main}</p>
                    <p class="predicted-max-min">${response.list[i].main.temp_max.toFixed(0) + "&#186"}</p> 
            </div>`;
            } 
        }
        weekly.innerHTML = dateOfWeek;
    })      
  }

 

function weatherNow(){ 
    const city = cityName.value;
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${openWeatherMapId}`;
    const urlForcast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${openWeatherMapId}`;

    fetch(urlWeather)
    .then(response => response.json())
    .then(function (response) {
        locationTitle.innerHTML = response.name + ', ' + response.sys.country;
        temperatureDegree.innerHTML = response.main.temp.toFixed(0) + "&#186";
        weatherIcon.innerHTML = `<img src="${'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png'}" height="75">`;
        weatherDescription.innerHTML = response.weather[0].main;
        // temperatureMax.innerHTML = response.main.temp_max.toFixed(0) + "&#186 <span> / </span>";
        // temperatureMin.innerHTML = response.main.temp_min.toFixed(0) + "&#186";
        pressure.innerHTML = response.main.pressure + " mBar";
        humidity.innerHTML = response.main.humidity + " %";
        console.log(response.wind.deg)
        windDirectionSpeed.innerHTML = degToDir(response.wind.deg) + "&nbsp&nbsp" + response.wind.speed + "m/s";
        clouds.innerHTML = response.clouds.all  + " %";
    })    

    fetch(urlForcast)
        .then(response => response.json())
        .then(function (response) { 

            let dateOfWeek = "";
            const today = new Date().toISOString().slice(0, 10);
            const timeOfDayForCond = '15:00:00';

            // temperatureMax.innerHTML = response.list[0].main.temp_max.toFixed(0) + "&#186 <span> / </span>";
            // temperatureMin.innerHTML = response.list[0].main.temp_min.toFixed(0) + "&#186";            
            

            for (let i = 1; i <= 39; i++){
                if (response.list[i].dt_txt.slice(0,10) != today && response.list[i].dt_txt.slice(11,19) == timeOfDayForCond ){
                   // console.log(response.list[i].dt_txt.slice(11,19));
                dateOfWeek += `
                <div>
                        <p class="date">${response.list[i].dt_txt.slice(0,10)}</p>
                        <img src="${'https://openweathermap.org/img/w/' + response.list[i].weather[0].icon + '.png'}">
                        <p class="predicted-weather-conditions">${response.list[i].weather[0].main}</p>
                        <p class="predicted-max-min">${response.list[i].main.temp_max.toFixed(0) + "&#186"}</p> 
                </div>`;
                } 
            }
            weekly.innerHTML = dateOfWeek;    
        })
    }

    function degToDir(num){
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
}   
    
search.addEventListener('click', weatherNow);

getLocation();

document.getElementById("enter-location").addEventListener("keyup", function(event){         
    if (event.keyCode === 13) {        
        document.getElementById("search").click();               
        }
     event.preventDefault();
});
