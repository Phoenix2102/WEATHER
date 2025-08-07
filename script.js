// Weather Dashboard JS using WeatherAPI.com
// Get your free API key from https://www.weatherapi.com/

const apiKey = '0ac86d2a944c45ada2690405250708'; // <-- Replace with your WeatherAPI.com key
const apiUrl = 'https://api.weatherapi.com/v1/current.json';

const form = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const weatherCard = document.getElementById('weatherCard');
const errorMsg = document.getElementById('errorMsg');

const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

async function fetchWeather(city) {
    errorMsg.textContent = '';
    weatherCard.classList.add('hidden');
    try {
        const response = await fetch(`${apiUrl}?key=${apiKey}&q=${encodeURIComponent(city)}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        updateWeatherCard(data);
    } catch (error) {
        errorMsg.textContent = error.message || 'Failed to fetch weather data.';
    }
}

function updateWeatherCard(data) {
    cityName.textContent = `${data.location.name}, ${data.location.country}`;
    temperature.textContent = `${Math.round(data.current.temp_c)}°C`;
    description.textContent = data.current.condition.text;
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    wind.textContent = `Wind: ${Math.round(data.current.wind_kph)} km/h`;
    weatherIcon.src = `https:${data.current.condition.icon}`;
    weatherIcon.alt = data.current.condition.text;
    weatherCard.classList.remove('hidden');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
}); 