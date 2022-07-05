import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import GetWeatherFromService from "../../services/weather";

const initialState = {
    loading: false,
    weather: {},
    error:''
}

//Generates pending, fulfilled and rejected action types
const fetchWeather = createAsyncThunk('weather/fetchWeather', async (location)=>{
   return GetWeatherFromService(location)
    .then(res => res.json())
})

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchWeather.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.weather = action.payload;
            state.error = '';
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false;
            state.weather = {};
            state.error = action.error.message;
        })
    }
})

export default weatherSlice.reducer;
export {fetchWeather};