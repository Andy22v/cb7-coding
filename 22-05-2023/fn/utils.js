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
  const titleEl = document.createElement("h3");
  const tempEl = document.createElement("p");

  wrapperEl.className = "city";
  titleEl.textContent = cityData.name;
  tempEl.textContent = cityData.main.temp + "°C";

  wrapperEl.append(titleEl, tempEl);
  return wrapperEl;
};
