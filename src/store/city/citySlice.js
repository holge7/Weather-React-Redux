import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
    city:'Málaga'
}

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        changeCity: (state, {payload}) => {
            state.city = payload;
        }
    }
})

export default citySlice.reducer;
export const {changeCity} = citySlice.actions;
