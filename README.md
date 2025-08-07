
🌤️ Weather Dashboard
A simple and responsive weather dashboard that fetches and displays real-time weather data for any city using the [OpenWeatherMap API](https://openweathermap.org/api).

✨ Features

 🔎 Search any city to get current weather info
📍 Displays city name, temperature, weather icon, description, humidity, and wind speed
📱 Fully responsive UI for mobile and desktop
❌ Handles errors like invalid city names and network issues gracefully

📊 Weather Data Displayed

* City Name & Country
* Temperature (°C)
* Weather Icon
* Weather Description
* Humidity (%)
* Wind Speed (m/s)

---

## ⚙️ Setup & Usage

1. **Get a free API key** from [OpenWeatherMap](https://openweathermap.org/api)
2. Open the `script.js` file and replace `'YOUR_API_KEY'` with your actual API key:
   ```js
   const apiKey = 'YOUR_API_KEY';
   ```
3. Open `index.html` in your browser locally
   *or*
   Deploy it online (see instructions below)
🧪 Testing Scenarios

* ✅ Valid city name → Displays accurate weather data
* ❌ Invalid city name → Shows a user-friendly error message
* ⚠️ Empty input → No fetch triggered, no error shown
* 📡 Network/API error → Error message is displayed
* 📱 Mobile-friendly → Layout adapts to various screen sizes
🚀 Deployment (GitHub Pages)

Want to share your app online? Here’s how:

1. Push all your project files to a GitHub repository (e.g., `weather-dashboard`)
2. Go to `Settings` > `Pages`
3. Under **Source**, select your branch (e.g., `main`) and folder (e.g., `/weather-api` if in a subfolder)
4. Save your changes — GitHub will give you a live URL like:
   `https://weather-livid-two-59.vercel.app/`
⚠️ Note
This project uses the **free version** of the OpenWeatherMap API, which may have request limits. For production use:

* Protect your API key (don’t expose it in frontend JS)
* Consider backend proxying or paid tiers
* Monitor rate limits and usage
Feel free to fork, contribute, or enhance the project!
