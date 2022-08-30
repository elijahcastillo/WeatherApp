import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SavedW } from "../css/WeatherTop.styled";
import close from "../assets/close.png";
import {
  getData,
  setNavSlide,
  setSavedWeather,
} from "../features/WeatherSlice";

const SavedWeather = () => {
  const { savedWeather, slide } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const loadWeather = (city) => {
    console.log("load");
    dispatch(getData(city));
    dispatch(setNavSlide(!slide));
  };

  const deleteWeather = (name) => {
    console.log("Delete");
    let newState = [...savedWeather];
    const idx = savedWeather.findIndex((item) => item == name);
    newState.splice(idx, 1);
    dispatch(setSavedWeather(newState));
    localStorage.setItem("savedWeather", JSON.stringify(newState));
    //console.log(newState, savedWeather);
  };
  return (
    <SavedW>
      {savedWeather.map((name) => {
        return (
          <div className="name">
            <h4 onClick={() => loadWeather(name)}>{name}</h4>
            <img
              src={close}
              className="x"
              onClick={() => deleteWeather(name)}
            />
          </div>
        );
      })}
    </SavedW>
  );
};

export default SavedWeather;