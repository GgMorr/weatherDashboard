console.log("I am working.");

//var aCityEl = document.getElementById("#aCity");
var formBodyEl = document.querySelector(".formBody");

var location = document.getElementsByClassName(".location");
var weather = document.getElementsByClassName(".weather");
var city = document.getElementsByClassName(".city");
var date = document.getElementsByClassName(".date");
var current = document.getElementsByClassName(".current");
var hiLow = document.getElementsByClassName(".highLow");
var temp = document.getElementsByClassName(".temp");


                         
const apiCity = {
    key:  "19ce0f71c8b8397b36cd1d5e5a4f387b",
    url: "https//api.openweathermap.org/data/2.5/weather?q="
};

const apiLatLon = {
    key:  "19ce0f71c8b8397b36cd1d5e5a4f387b",
    url: "api.openweathermap.org/data/2.5/weather?lat="
};


var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};

formBodyEl.addEventListener("click", formSubmitHandler);

// Set event listener for button click
// const searchBox = document.querySelector("#aCity");
//     searchBox.addEventListener("submit", setQuery);


function setQuery(event) {
        if(event === "click") {
        getResults(formBodyEl.value);
        console.log(formBodyEl.value);
        }
    };


    
// FETCH WEATHER BASED ON CITY
 function getResults(city) {
    
    fetch (apiCity.url + city + "&appid=" + apiCity.key)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}


// // FETCH WEATHER BASED ON LATATUDE & LONGITUDE
function getResults(lat, lon) {
  
    fetch (apiLatLon.url + lat + "&&lon=" + lon + "&appid=" +apiLatLon.key)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

// FUNCTION TO DISPLAY RESULTS
function displayResults(weather) {
    console.log (weather);
};

    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}`;

    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);

    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>℃</span>`;

    let weatherEl = document.querySelector(".current .weather");
    weatherEl.innerText = weather.weather[0].main;

    let hiLow = document.querySelector(".highLow");
    hiLow.innerText = `${Math.round(weather.main.temp_min)}℃ / ${Math.round(weather.main.temp_max)}℃`;


function dateBuilder (d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

    let day = days[d.getD()];
    let date = d.getDate();

    let month = months[d.getMonth()];
    let year = d.getYear();

    return `${day} ${date} ${month} ${year}`;
}

getResults("");