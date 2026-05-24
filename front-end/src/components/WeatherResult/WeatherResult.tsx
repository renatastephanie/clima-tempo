import type { WeatherData } from "../../types/weather";
import styles from "./WeatherResult.module.css";

interface WeatherResultProps {
  weather: WeatherData | null;
  error: string;
}

export const WeatherResult = ({ weather, error }: WeatherResultProps) => {
  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className={styles.weatherResult}>
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="ìcone do tempo"
      />

      <p className={styles.description}>{weather.weather[0].description}</p>
      <p className={styles.temperature}>{weather.main.temp.toFixed(0)}ºC</p>
    </div>
  );
};
