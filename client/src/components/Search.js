import React, { useState } from "react";
import { SearchStyle } from "../css/Search.styled";
import search from "../assets/glass.png";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/WeatherSlice";
import { useEffect } from "react";

const Search = () => {
  const { activeSearch } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const [searchActive, setSearchActive] = useState(false);


  const sendReq = () => {
    dispatch(getData(city));
  };

  const filteredItems = activeSearch.filter((name) => {
    return name.toLowerCase().includes(city.toLowerCase());
  });

  function addEVListeners() {
    window.addEventListener("click", () => {
      if (searchActive) {
        setSearchActive(false);
      }
    });

    window.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && searchActive) {
        sendReq();
      }
    });
  }

  useEffect(() => {
    addEVListeners();

    if (Boolean(city)) {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
  }, [city]);
  return (
    <SearchStyle>
      <input
        placeholder="Search"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        value={city}
      />
      <img src={search} onClick={sendReq} />
      <div className={searchActive ? "active activeSwitch" : "active"}>
        {filteredItems.map((val, i) => {
          return (
            <p key={i} className="name" onClick={() => setCity(val)}>
              {val}
            </p>
          );
        })}
      </div>
    </SearchStyle>
  );
};

export default Search;
