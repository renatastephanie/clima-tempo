import axios from "axios";
import type { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  const response = await axios.get<WeatherData>(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
      lang: "pt_br",
    },
  });
  return response.data;
}
