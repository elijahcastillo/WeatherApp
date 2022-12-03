import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SavedW } from "../css/WeatherTop.styled";
import close from "../assets/close.png";
import {
  getData,
  setNavSlide,
  setSavedWeather,
} from "../features/WeatherSlice";
import { toast } from "react-toastify";

const SavedWeather = () => {
  const { savedWeather, slide } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const loadWeather = (city) => {
    dispatch(getData(city));
    dispatch(setNavSlide(!slide));
  };

  const deleteWeather = (name) => {
    toast.success("Location Deleted");
    let newState = [...savedWeather];
    const idx = savedWeather.findIndex((item) => item == name);
    newState.splice(idx, 1);
    dispatch(setSavedWeather(newState));
    localStorage.setItem("savedWeather", JSON.stringify(newState));
  };
  return (
    <SavedW>
      {savedWeather.map((name, i) => {
        return (
          <div className="name" key={i}>
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
