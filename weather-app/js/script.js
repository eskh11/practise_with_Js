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
//scroll with getBoundingClientReact
let startBtn = document.getElementById("start");
let main = document.getElementById("main");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("start")) {
    window.scrollTo({
      top: main.getBoundingClientRect().y - 50,
      left: 0,
      behavior: "smooth",
    });
  } else if (e.target.classList.contains("top")) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
});
// social redirect
let facebookButton = document.querySelector("fbtn");
let whatsappButton = document.querySelector("wbtn");
let githubButton = document.querySelector("gbtn");
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fbtn")) {
    window.open("https://www.facebook.com/firstnameeslam.khaled");
  } else if (e.target.classList.contains("wbtn")) {
    window.open(
      "https://wa.me/+201066103501"
    );
  } else if (e.target.classList.contains("gbtn")) {
    window.open("https://github.com/eskh11");
  }
});
