// import ShowSts from "./messages/ShowSts";
import { useEffect, useState } from "react";
import moment from "moment";
import { getForecastInfo, getLocationInfo } from "../utils/FetchData";
import { useDispatch } from "react-redux";
import { setData } from "../store/weatherSlice";

function Hero({ data, timeZone }) {
  const [timeObj, setTimeObj] = useState({
    time: "",
    ampm: "",
    day: "",
    date: "",
  });

  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const filterTime = (num) => {
      setTimeObj({
        time: moment(num * 1000).format("hh:mm"),
        ampm: moment(num * 1000).format("a"),
        day: moment(num * 1000).format("dddd"),
        date: moment(num * 1000).format("Do MMMM"),
      });
    };

    filterTime(data.dt);
  }, [data]);

  const handleClick = async () => {
    if (inputValue === "") {
      alert("Empty Field");
    } else {
      try {
        const { latitude, longitude } = await getLocationInfo(inputValue);
        setInputValue("");
        if (latitude) {
          const response = await getForecastInfo(latitude, longitude);
          if (response) {
            dispatch(setData(response));
          }
        }
      } catch (err) {
        alert("Invalid Location");
        console.log(err);
      }
    }
  };

  return (
    <div className="w-11/12 m-h-[calc(100vh-100px)] lg:w-3/4 sm:w-4/5 mx-auto my-3">
      <div className="sm:flex sm:justify-between sm:mt-16">
        <div className=" h-fit px-5 py-5 box-border text-text1 rounded-md">
          <p className="text-2xl font-semibold">
            {timeObj.time}{" "}
            <span className="text-sm font-normal">{timeObj.ampm}</span>
          </p>
          <p className="text-sm">
            {timeObj.day}, {timeObj.date}
          </p>
          <p className="text-lg font-semibold">{timeZone}</p>
        </div>

        <div className="text-text1 text-lg flex gap-5 bg-dark1 w-fit h-fit p-4 box-border rounded-md">
          <div className="font-semibold">
            <p>Humidity</p>
            <p>Temperature</p>
            <p>Feel</p>
            <p>Wind Speed</p>
            <p>Weather</p>
          </div>
          <div className="text-sm flex flex-col gap-[9px] mt-1">
            <p>{data.humidity}%</p>
            <p>{data.temp} &deg;c</p>
            <p>{data.feels_like} &deg;c</p>
            <p>{data.wind_speed} m/s</p>
            <p className="min-w-[100px]">{data.weather[0].description}</p>
          </div>
        </div>
      </div>

      <div className="w-10/12 h-fit mx-auto my-10 flex flex-col items-center md:flex-row justify-center gap-2  sm:mt-12">
        <input
          className="w-full h-fit md:w-3/4 px-5 py-1 rounded-3xl outline-none border-2 border-text2 bg-transparent font-medium text-text1 text-sm"
          type="text"
          placeholder="enter city name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div
          className="py-1 px-4 h-fit border-solid border-2 border-text2 text-text1 w-fit rounded-lg hover:bg-dark1"
          onClick={handleClick}
        >
          Search
        </div>
      </div>
      {/* <ShowSts
        heading="Test MSG"
        info="this is a text"
        onclick={() => hello()}
      /> */}
    </div>
  );
}

export default Hero;
