import { getWeatherData, cityWeather } from "./fn/utils.js";
const root = document.querySelector("#root");
const inputEl = document.querySelector("#input");

inputEl.addEventListener("change", (e) => {
  if (root.firstChild) {
    root.removeChild(root.firstChild);
  }
  getWeatherData(e.target.value).then((data) => {
    root.appendChild(cityWeather(data));
    inputEl.value = "";
  });
});
