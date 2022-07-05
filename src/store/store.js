import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from './weather/weatherSlice'
import cityReducer from "./city/citySlice";

export const store = configureStore({
    reducer:{
        weather: weatherReducer,
        city:cityReducer,
    },
})