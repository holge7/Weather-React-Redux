import React from "react";
import { useSelector } from "react-redux/es/exports";

export default () => {
    const { weather } = useSelector((state)=>state.weather);

    const max = weather.forecast.forecastday[0].day.maxtemp_c
    const min = weather.forecast.forecastday[0].day.mintemp_c

    return (
        <div className="flex justify-around">
            <div className="flex items-center">
                <div className="font-bold my-1">{`${max}/${min}`}</div>
                <div className="text-gray-600 font-bold ">&nbsp;ºC - Max/Min</div>
            </div>
        </div>
    )
}