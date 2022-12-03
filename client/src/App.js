import Navbar from "./components/Navbar";
import WeatherTop from "./components/WeatherTop";
import { Container } from "./css/Container.styled";
import { GlobalStyles } from "./css/Global.styled";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/WeatherSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Navbar />
        <Container>
          <WeatherTop />
        </Container>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
