import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buildQueries } from "@testing-library/react";
import GetWeatherFromService from "../../services/weather";

const initialState = {
    loading: false,
    weather: {},
    error:''
}

//Generates pending, fulfilled and rejected action types
const fetchWeather = createAsyncThunk('weather/fetchWeather', ()=>{
   return GetWeatherFromService()
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


//module.exports.fetchWeather = fetchWeather
// export default weatherSlice.reducer;













































/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import GetWeatherFromService from "../../services/weather";

const initialState = {
    loading: false,
    weather: {},
    error:''
}

const FETCH_WEATHER_REQUESTED = 'FETCH_WEATHER_REQUESTED';
const FETCH_WEATHER_SUCCEEDED = 'FETCH_WEATHER_SUCCEEDED';
const FETCH_WEATHER_FAILED = 'FETCH_WEATHER_FAILED';


const getWeather = createAsyncThunk(
    'weather/getWeather',
    async (thunkAPI) => {
        const res = await GetWeatherFromService()
        const data = await res.json();
        return data
    }
)




const weatherSlice = createSlice({
    name:'weather',
    initialState,
    reducers:{
        searchWeather: (state, {payload}) => {
            state.value = true
            state.data = payload
        }
    },
    extraReducers: {
        [getWeather.getWeather]: (state, {payload}) => {
            state.value = true
            state.data = payload
        }
    }
})


const { searchWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
*/










// const weatherSlice = createSlice({
//     name: 'weather',
//     initialState,
//     reducers:{
//         // searchWeather: (state, {payload}) => {
//         //     state.value = true
//         //     state.data = payload
//         // },
//         fetchWeatherRequest,
//         fetchWeatherSuccess,
//         fetchWeatherFailure,
//     }
// })


// export function fetchWeather(){
//     return async (dispatch) => {
//         try {
//             const res = await GetWeatherFromService()
//             const data = await res.json();
//             dispatch(searchWeather(data))
//         } catch (error) {
//             console.log("Error en weatherSlice: ")
//             console.log(error)
//         }
//     }
// }