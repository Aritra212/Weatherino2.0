import Hero from "../components/Hero";
import Forecasts from "../components/Forecasts";
// import { weatherData } from "../data/data";
import { useSelector } from "react-redux";

function Home() {
  const weatherStatus = useSelector((state) => state.weatherData.status);
  const weatherData = useSelector((state) =>
    weatherStatus ? state.weatherData.weatherData : null
  );

  const forcastsData = weatherData.daily;
  const currentData = weatherData.current;
  const timeZone = weatherData.timezone;

  return (
    <>
      <Hero data={currentData} timeZone={timeZone} />
      <Forecasts data={forcastsData} />
    </>
  );
}

export default Home;
