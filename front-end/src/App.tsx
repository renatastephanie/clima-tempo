import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { WeatherResult } from "./components/WeatherResult/WeatherResult";
import { Footer } from "./components/Footer/Footer";
import { getWeatherByCity } from "./services/weatherAPI";
import type { WeatherData } from "./types/weather";
import "./index.css";
import styles from "./App.module.scss";
function App() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (city) {
      setError("Por favor, digite o nome de uma cidade.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch {
      setError("Cidade não encontrada");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Header />
        <SearchBar city={city} onCityChange={setCity} onSearch={handleSearch} />

        {loading && <p className={styles.loading}>Buscando...</p>}
        <WeatherResult weather={weather} error={error} />
        <Footer />
      </div>
    </>
  );
}

export default App;
