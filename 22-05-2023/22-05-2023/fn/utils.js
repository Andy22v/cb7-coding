export const getWeatherData = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=16b376f5a025907bb01c4f15c6cd0166`
  );

  const data = await res.json();
  console.log(data);
  return data;
};

export const cityWeather = (cityData) => {
  console.log(cityData);
  const wrapperEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const datasEl = document.createElement("div");
  const tempEl = document.createElement("p");
  const humidEl = document.createElement("p");
  const windEl = document.createElement("p");

  wrapperEl.className = "city-card";
  titleEl.textContent = cityData.name;
  datasEl.className = "datas-container";
  tempEl.textContent = "Temperature: " + cityData.main.temp.toFixed() + "°C";
  humidEl.textContent = "Humidity: " + cityData.main.humidity + "%";
  windEl.textContent = "Wind: " + cityData.wind.speed.toFixed() + "km/h";

  datasEl.append(tempEl, humidEl, windEl);
  wrapperEl.append(titleEl, datasEl);
  return wrapperEl;
};
