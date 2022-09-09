import React, { useState } from "react";
import { SearchStyle } from "../css/Search.styled";
import search from "../assets/glass.png";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/WeatherSlice";
import { useEffect } from "react";

const Search = () => {
  const [city, setCity] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const [filtNames, setFiltNames] = useState([]);

  const { activeSearch } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const sendReq = () => {
    dispatch(getData(city));
  };

  function filterName() {
    const result = activeSearch.filter((name) => {
      return name.toLowerCase().includes(city.toLowerCase());
    });
    setFiltNames(result);
  }

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
          filterName();
        }}
        value={city}
      />
      <img src={search} onClick={sendReq} />
      <div className={searchActive ? "active activeSwitch" : "active"}>
        {filtNames.map((val, i) => {
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
