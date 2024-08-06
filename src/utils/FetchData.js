import axios from "axios";

// Function to get location information
const getLocationInfo = async (name) => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    );
    return {
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    };
  } catch (err) {
    console.error("Error fetching location info:", err);
    throw err; // Re-throw the error after logging it
  }
};

// Function to get forecast information
const getForecastInfo = async (latitude = 22.5697, longitude = 88.3697) => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (err) {
    console.error("Error fetching forecast info:", err);
    throw err;
  }
};

export { getLocationInfo, getForecastInfo };
