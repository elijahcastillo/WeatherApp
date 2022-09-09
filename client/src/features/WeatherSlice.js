import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  searchLoading: true,
  data: [],
  savedWeather: JSON.parse(localStorage.getItem("savedWeather")) || [],
  search: [],
  activeSearch: [],
  slide: false,
};

export const getSearch = createAsyncThunk("data/getSearch", async () => {
  try {
    const res = await axios.get(
      "https://gist.githubusercontent.com/ahmu83/38865147cf3727d221941a2ef8c22a77/raw/c647f74643c0b3f8407c28ddbb599e9f594365ca/US_States_and_Cities.json"
    );
    return res.data;
  } catch (error) {
    console.log("SEARCH ERR DATA", error);
    return true;
  }
});

export const getData = createAsyncThunk("posts/getPosts", async (query) => {
  try {
    let sendCity = query;

    if (sendCity == "GETGEOCORDS") {
      console.log("GEO GETDATA TRUE");
      const geoData = await axios.get(`https://geolocation-db.com/json/`);
      const city = geoData.data.city;
      sendCity = city;
    }

    const resCords = await axios.get(
      `https://nominatim.openstreetmap.org/search.php?q=${
        sendCity ? sendCity : ""
      }&format=jsonv2`
    );

    const name = resCords.data[0].display_name;
    let split = name.split(",");
    const fixedName = [split[0], ",", split[2]];

    const lat = resCords.data[0].lat;
    const long = resCords.data[0].lon;

    console.log(lat, long, "AFTER CALL");
    const resUrl = await axios.get(
      `https://api.weather.gov/points/${lat},${long}`
    );

    const newUrl = resUrl.data.properties.forecast;

    const resData = await axios.get(newUrl);
    console.log(resData, "resd");

    const data = resData.data.properties.periods;

    return [...data, fixedName];
  } catch (error) {
    console.log("catch getdata err", error);
    return true;
  }
});

export const NewsSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setActiveSearch: (state, action) => {
      state.activeSearch = action.payload;
    },
    setSavedWeather: (state, action) => {
      console.log("HERE", action.payload);
      state.savedWeather = action.payload;
    },
    setNavSlide: (state, action) => {
      state.slide = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      //Weather Data
      .addCase(getData.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        if (action.payload === true) {
          state.loading = true;
          return;
        }
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = true;
      })

      //Search Data
      .addCase(getSearch.pending, (state, _) => {
        state.searchLoading = true;
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        console.log(action.payload, "PAYSEARCH");
        if (action.payload === true) {
          state.searchLoading = true;
          return;
        }
        state.searchLoading = false;
        state.search = action.payload;
      })
      .addCase(getSearch.rejected, (state, _) => {
        state.searchLoading = true;
      });
  },
});

export default NewsSlice.reducer;
export const { setActiveSearch, setSavedWeather, setNavSlide } =
  NewsSlice.actions;
