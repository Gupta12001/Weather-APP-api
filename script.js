const apikey = "f666521e064ddf1f50ab494a2910e2f8";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

// Sample cities (you can add more or replace this with a dynamic API call)
const cities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
  'Austin', 'Jacksonville', 'San Francisco', 'Columbus', 'Fort Worth',
  'Indianapolis', 'Charlotte', 'Seattle', 'Denver', 'El Paso',
  'Washington', 'Boston', 'Detroit', 'Nashville', 'Oklahoma City',
  'Portland', 'Las Vegas', 'Louisville', 'Baltimore', 'Milwaukee',
    'New Delhi', 'Mumbai', 'Bengaluru', 'Chennai', 'Kolkata',
    'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat',
    'Lucknow', 'Kanpur', 'Nagpur', 'Visakhapatnam', 'Patna',
    'Vadodara', 'Indore', 'Thane', 'Bhopal', 'Coimbatore',
    'Agra', 'Madurai', 'Nashik', 'Rajkot', 'Varanasi','Jammu & Kashmir',
  ];
  
const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

// Fetch weather data by city name
async function getWeatherByLocation(city) {
  try {
    const resp = await fetch(url(city), { origin: "cors" });
    if (!resp.ok) throw new Error('City not found'); // Error handling
    const respData = await resp.json();
    console.log(respData);
    addWeatherToPage(respData);
  } catch (error) {
    main.innerHTML = `<p class="error">${error.message}</p>`;
    console.error(error); // Log the error for debugging
  }
}

// Display the weather information on the page
function addWeatherToPage(data) {
  const temp = KtoC(data.main.temp);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  const weather = document.createElement("div");
  weather.classList.add("weather");

  weather.innerHTML = `
        <h2>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> 
          ${temp}°C 
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        </h2>
        <small>${data.weather[0].main}</small>
        <div class="more-info">
          <p>Humidity: <span>${humidity}%</span></p>
          <p>Wind speed: <span>${Math.trunc(windSpeed * 3.6)} km/h</span></p>
        </div>
    `;

  // Cleanup and add new weather details
  main.innerHTML = "";
  main.appendChild(weather);
}

function KtoC(K) {
  return Math.floor(K - 273.15);
}

// Filter cities based on user input
function filterCities(input) {
  return cities.filter((city) => city.toLowerCase().includes(input.toLowerCase()));
}

// Display city suggestions as user types
search.addEventListener("input", () => {
  const inputValue = search.value;
  suggestions.innerHTML = ""; // Clear previous suggestions

  if (inputValue.length > 0) {
    const filteredCities = filterCities(inputValue);

    filteredCities.forEach((city) => {
      const li = document.createElement("li");
      li.textContent = city;
      suggestions.appendChild(li);

      // Click event to set city in search input and fetch weather data
      li.addEventListener("click", () => {
        search.value = city;
        suggestions.innerHTML = ""; // Clear suggestions once selected
        getWeatherByLocation(city); // Fetch weather for the selected city
      });
    });
  }
});

// Fetch weather when form is submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = search.value.trim();

  if (city) {
    getWeatherByLocation(city);
  }
});


