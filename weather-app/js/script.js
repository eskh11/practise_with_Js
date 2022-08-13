// Get city name value
let input = document.querySelector("input");
let cityName = "";
input.onblur = () => {
  cityName = input.value;
};
// Get Data Holders
let cityNameH = document.querySelector(".city-name");
let conImgH = document.querySelector(".img-con");
let descriptionH = document.querySelector("span.description");
let tempH = document.querySelector("h5.temp");
let sunRiseH = document.querySelector("span.sun-rise");
let sunSetH = document.querySelector("span.sun-set");
let humH = document.querySelector("p.hum");
let presH = document.querySelector("p.pres");
let windH = document.querySelector("p.wind");
let fellH = document.querySelector("p.feel");
//Fetch Data
const apikey = "191099ed8445fe8983972073b1d68dd9";
async function getWeather(city) {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );
    data = await data.json();
    cityNameH.innerHTML = `${data.name},${data.sys.country}`;
    conImgH.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    descriptionH.innerHTML = data.weather[0].description;
    tempH.innerHTML = `Current tempreture: <span>${data.main.temp.toFixed(
      0
    )}&deg;C</span>`;
    humH.innerHTML = `${data.main.humidity}%`;
    fellH.innerHTML = `${data.main.feels_like.toFixed(0)}&deg;C`;
    presH.innerHTML = `${data.main.pressure}mBar`;
    windH.innerHTML = `${data.wind.speed}Km/h`;
  } catch {
    cityNameH.innerHTML = `City Not Found!!`;
    throw Error("city Not Found ");
  }
}
// call function on click
let searchBtn = document.querySelector(".search-btn");
searchBtn.onclick = () => {
  getWeather(cityName);
};
