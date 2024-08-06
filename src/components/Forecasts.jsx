import moment from "moment";

function Forecasts({ data }) {
  console.log(data);
  return (
    <div className="w-full md:w-4/5 p-4 mx-auto flex gap-3 overflow-x-scroll items-center my-10">
      {data?.map((el) => (
        <div
          key={el.dt}
          className="min-w-[240px] box-border border-solid border-2 border-text2 bg-dark1 text-text1 p-4 rounded-lg shadow-md shadow-text2"
        >
          {console.log(el.dt)}
          <div className="flex justify-between pb-3 border-solid border-b-[3px] border-text2">
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
              />
            </div>
            <div className="text-right flex flex-col justify-center">
              <p className="font-semibold text-xl">
                {moment(el.dt * 1000).format("dddd")}
              </p>
              <p className="text-sm ">
                {moment(el.dt * 1000).format("DD/MM/YYYY")}
              </p>
              <p className="font-semibold text-lg capitalize">
                {el.weather[0].description}
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <p>Max Temp</p>
              <p>Min Temp</p>
              <p>Humidity</p>
              <p>Wind Speed</p>
            </div>
            <div>
              <p>{el.temp.max} &deg;c</p>
              <p>{el.temp.min} &deg;c</p>
              <p>{el.humidity} %</p>
              <p>{el.wind_speed} m/s</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forecasts;
