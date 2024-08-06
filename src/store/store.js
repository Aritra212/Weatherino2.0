import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";

const store = configureStore({
  reducer: {
    weatherData: weatherSlice,
  },
});

export default store;
