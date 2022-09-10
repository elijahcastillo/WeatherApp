import React from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FCast } from "../css/Forecast.styled";

const Forecast = () => {
  const { data, loading } = useSelector((state) => state.weather);
  const forcastBubble = useRef(null);

  useEffect(() => {
    forcastBubble.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      console.log(e.deltaY);
      forcastBubble.current.scrollLeft += e.deltaY / 2;
    });
  }, []);

  return (
    <FCast ref={forcastBubble}>
      {data.map((forecast, i) => {
        if (i == data.length - 1) return null;
        return loading ? (
          <div className="period" key={i}>
            <p className="everyLoad timeLoad">{forecast.name}</p>
            <p className="everyLoad iconLoad"></p>
            <p className="everyLoad tempLoad">{forecast.temperature}°</p>
          </div>
        ) : (
          <div className="period" key={i}>
            <p className="time">{forecast.name}</p>
            <img className="icon" src={forecast.icon} />
            <p className="temp">{forecast.temperature}°</p>
          </div>
        );
      })}
    </FCast>
  );
};

export default Forecast;
