import React, { useEffect } from "react";
import { SearchContainerS } from "../css/Search.styled";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSearch } from "../features/WeatherSlice";

const SearchContainer = ({ resize }) => {
  const { search } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  function sendSelect(val) {
    const filterdNames = search[val];
    dispatch(setActiveSearch(filterdNames));
  }

  return (
    <SearchContainerS>
      {resize ? (
        <div className="big">
          <Search />
          <select
            className="sel"
            onChange={(e) => sendSelect(e.target.value)}
            defaultValue="Select State"
          >
            <option disabled>Select State</option>
            {Object.keys(search).map((val, i) => {
              return (
                <option key={i} value={val}>
                  {val}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        <div className="small">
          <select
            className="sel"
            onChange={(e) => sendSelect(e.target.value)}
            defaultValue="Select State"
          >
            <option disabled>Select State</option>
            {Object.keys(search).map((val, i) => {
              return (
                <option key={i} value={val}>
                  {val}
                </option>
              );
            })}
          </select>

          <Search />
        </div>
      )}
    </SearchContainerS>
  );
};

export default SearchContainer;
