import React from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FCast } from "../css/Forecast.styled";

const Forecast = () => {
  const { data, loading } = useSelector((state) => state.weather);
  const forcastBubble = useRef(null);

  useEffect(() => {
    //drag scroll effect
    let isDown = false;
    let startX;
    let scrollLeft;

    forcastBubble.current.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - forcastBubble.current.offsetLeft;
      scrollLeft = forcastBubble.current.scrollLeft;
    });
    forcastBubble.current.addEventListener("mouseleave", () => {
      isDown = false;
    });
    forcastBubble.current.addEventListener("mouseup", () => {
      isDown = false;
    });
    forcastBubble.current.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - forcastBubble.current.offsetLeft;
      const walk = (x - startX) * 1.5; //scroll-fast
      forcastBubble.current.scrollLeft = scrollLeft - walk;
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
