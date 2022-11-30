import React, { useState } from "react";
import { Nav, NavWrapper } from "../css/Navbar.styled";
import hamburg from "../assets/whiteMenu.png";
import cloud from "../assets/clouds.png";
import revert from "../assets/revert.png";
import add from "../assets/add.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearch,
  setSavedWeather,
  setNavSlide,
  getData,
  changeTempUnit,
} from "../features/WeatherSlice";
import { C_to_F, F_to_C } from "../helper/help";
import SearchContainer from "./SearchContainer";
import SavedWeather from "./SavedWeather";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { data, slide, loading, tempChange } = useSelector(
    (state) => state.weather
  );

  const dispatch = useDispatch();

  const savePlace = () => {
    if (loading) {
      return;
    }
    toast.success("Location Saved!");
    const name1 = data[data.length - 1][0];
    const name2 = data[data.length - 1][2];
    const res = name1.concat(" ", name2);
    if (localStorage.getItem("savedWeather") === null) {
      localStorage.setItem("savedWeather", JSON.stringify([res]));
    } else {
      const oldData = JSON.parse(localStorage.getItem("savedWeather"));
      const newData = [...oldData, res];
      localStorage.setItem("savedWeather", JSON.stringify(newData));
      dispatch(setSavedWeather(newData));
    }
  };

  function getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((_) => {
        console.log("GET GEO CORDS");
        dispatch(getData("GETGEOCORDS"));
      });
    }
  }

  async function changeTemp() {
    const newVals = data.map((val, i) => {
      if (i == data.length - 1) {
        return val;
      }
      let mod = { ...val };
      if (tempChange) {
        mod.temperature = Math.floor(C_to_F(mod.temperature));
      } else {
        mod.temperature = Math.floor(F_to_C(mod.temperature));
      }

      return mod;
    });

    dispatch(changeTempUnit(newVals));
  }

  useEffect(() => {
    dispatch(getSearch());
  }, []);

  return (
    <>
      <NavWrapper>
        <div className={slide ? "slide slideOpen" : "slide"}>
          <SearchContainer resize={false} />
          <div className="addPlaceSM">
            <img src={add} className="sm" onClick={savePlace} />
            <img
              src={revert}
              onClick={() => {
                changeTemp();
                dispatch(setNavSlide(!slide));
              }}
              className="rev"
            />
          </div>
          <SavedWeather />
        </div>
        <div
          className={slide ? "mask" : "maskGone"}
          onClick={() => dispatch(setNavSlide(!slide))}
        ></div>
        <Nav>
          <div className="logo" onClick={getGeoLocation}>
            <img src={cloud} />
            <h1>Weather Now</h1>
          </div>

          <SearchContainer resize={true} />

          <div className="links">
            <img src={revert} className="add" onClick={changeTemp} />
            <img src={add} className="add" onClick={savePlace} />
            <img src={hamburg} onClick={() => dispatch(setNavSlide(!slide))} />
          </div>
        </Nav>
      </NavWrapper>
      <ToastContainer />
    </>
  );
};

export default Navbar;
