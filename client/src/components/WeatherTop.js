import React, { useEffect } from "react";
import { WTop } from "../css/WeatherTop.styled";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../features/WeatherSlice";
import { useState } from "react";

const WeatherTop = () => {
  const [time, setTime] = useState("");

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(getData("oakland"));

    var d = new Date().toLocaleString().replace(",", "");

    setTime(d);
  }, []);

  return (
    <>
      <WTop>
        {loading ? (
          <>
            <h1 className="error">No data, check netowrk or city name</h1>
            <div className="top">
              <h1 className="nameLoad everyLoad"></h1>
              <p className="dateLoad everyLoad"></p>
            </div>
            <div className="mid">
              <h1 className="tempLoad everyLoad"></h1>
            </div>
            <div className="bottom">
              <p className="feelLoad everyLoad"></p>
              <p className="typeLoad everyLoad"></p>
            </div>
          </>
        ) : (
          <>
            <div className="top">
              <h1 className="name">{data[data.length - 1]}</h1>
              <p className="date">{time}</p>
            </div>
            <div className="mid">
              <h1 className="temp">{data[0]["temperature"]}°</h1>
            </div>
            <div className="bottom">
              <p className="feel">Wind speed: {data[0]["windSpeed"]}</p>
              <p className="type">{data[0]["shortForecast"]}</p>
            </div>
          </>
        )}
      </WTop>
    </>
  );
};

export default WeatherTop;
