import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setData } from "./store/weatherSlice";
import { getForecastInfo } from "./utils/FetchData";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Query from "./components/messages/Query";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeMsg, setActiveMsg] = useState(true);
  const [location, setLocation] = useState({});

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const data = location
        ? await getForecastInfo(location.latitude, location.longitude)
        : await getForecastInfo();
      console.log(data);
      if (data) {
        dispatch(setData(data));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async (status) => {
    setActiveMsg(false);
    console.log(status);
    if (status) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error obtaining location:", error);
          fetchData();
        }
      );
    } else {
      fetchData();
    }
  };

  useEffect(() => {
    if (location) {
      fetchData();
    }
  }, [location]);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgb(15 0 26 / 89%) 0%, rgb(58 1 91 / 54%) 50%, rgb(15 0 26 / 94%) 100%)",
      }}
    >
      {!loading ? (
        <div className="w-full h-full flex flex-col justify-between overflow-y-scroll">
          <NavBar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      ) : activeMsg ? (
        <Query
          heading={"Location Permission"}
          info={
            "If you want to know the weather status in your area then please provide us the gps coordinate, to do so click 'Ok'."
          }
          onclick1={() => handleClick(1)}
          onclick2={() => handleClick(0)}
        />
      ) : (
        <p className="text-text1">
          Please wait while{" "}
          <span className="text-text2 font-semibold">Loading ...</span>
        </p>
      )}
    </div>
  );
}

export default App;
