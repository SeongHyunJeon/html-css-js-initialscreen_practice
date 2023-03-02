const API_KEY = "60726c34056d66a3009d27e995f510d7";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(
        ".right-page__column__middle span:first-child"
      );
      const weather = document.querySelector(
        ".right-page__column__middle span:nth-child(2)"
      );
      const curDeg = document.querySelector(
        ".right-page__column__middle span:nth-child(3)"
      );
      const comment = document.querySelector(
        ".right-page__column__middle span:last-child"
      );

      // city.innerText = data.name;

      const weatherIcon = document.createElement("i");
      if (data.weather[0].main === "Clouds") {
        weatherIcon.className = "fa-solid fa-cloud";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.className = "fa-regular fa-sun";
      } else if (data.weather[0].main === "Thunderstorm") {
        weatherIcon.className = "fa-solid fa-cloud-bolt";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.className = "fa-solid fa-cloudsmith";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.className = "fa-solid fa-cloud-showers-heavy";
      } else if (data.weather[0].main === "Snow") {
        weatherIcon.className = "fa-regular fa-snowflake";
      } else {
        weatherIcon.className = "fa-solid fa-cloud";
      }
      weather.appendChild(weatherIcon);

      const temp = Math.ceil(data.main.temp);
      curDeg.innerText = `Current temperature:  ${temp}°`;
      if (temp > 30) {
        comment.innerText =
          "It's very hot today. Remember to bring water if you go outside.";
      } else if (temp > 25) {
        comment.innerText =
          "The weather is hot today. Drink plenty of water and don't overexert yourself.";
      } else if (temp > 20) {
        comment.innerText =
          "Today's weather is very nice. Enjoy it with appropriate clothing.";
      } else if (temp > 15) {
        comment.innerText = "It's a bit chilly today. Prepare a light jacket.";
      } else if (temp > 10) {
        comment.innerText =
          "The weather has become cool. Wear a light coat before going out.";
      } else if (temp > 0) {
        comment.innerText =
          "It's cold today. Be sure to wear warm clothes when you go out.";
      } else if (temp > -5) {
        comment.innerText =
          "It's cold today. Wear a hat, gloves, and scarf when you go outside.";
      } else {
        comment.innerText =
          "It's very cold today. Be sure to wear warm clothes before going out.";
      }
    });
}

function onGeoError() {
  alert("I didn't have access to information about your whereabouts.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
