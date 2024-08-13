import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherAndDay from "./components/WeatherAndDay";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [location, setLocation] = useState("Karachi");
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      if (location === "") return;
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=8e996c7baf4e4124a59153302241308&q=${location} `
        );
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchData();
  }, [location]);

  const handleLocation = (location) => {
    setLocation(location);
  };
  return (
    <div className="main">
      <SearchBar handleLocation={handleLocation} />
      <WeatherAndDay data={weatherData} />
      <WeatherDetails data={weatherData} />
    </div>
  );
}

export default App;
