const API_KEY = "4df0f799640d391a1a3d4bb013a6cdc9"
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getWeather = async (city) => {
     weather.innerHTML = `<h3>Loading... <h3>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data);

}
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h3> City Not Found <h3>`
        return;
    }
    weather.innerHTML =
        `
      <div>
           <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      </div>
      <div>
           <h2>${(data.main.temp - 273.15).toFixed(2)}°C</h2>
           <h4>${data.weather[0].main}</h4>
      </div>
       `
}
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)