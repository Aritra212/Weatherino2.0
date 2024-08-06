import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  weatherData: null,
};

const weatherSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.status = true;
      state.weatherData = action.payload;
    },
  },
});

export const { setData } = weatherSlice.actions;
export default weatherSlice.reducer;
