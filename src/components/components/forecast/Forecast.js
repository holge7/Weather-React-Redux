import React from "react";
import Chart from "../Chart/Chart";

import { useSelector } from "react-redux";

export default () => {
    
    const weather = useSelector((state)=>state.weather);
    const forecast = weather.weather.forecast.forecastday[0].hour

    let foreToday = getForeDay(forecast)


    return(
        <div>
            <Chart data={foreToday} />
        </div>
    )
}

const getForeDay = (forecast) => {
    let foreDays = forecast.map((day)=>{
        return {
            'hour':day.time.split(" ")[1].split(":")[0].replace(/^0/, ''),
            'temp':day.temp_c,
        }
    })
    return foreDays;
}