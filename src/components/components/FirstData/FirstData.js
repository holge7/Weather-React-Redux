import React from "react";
import { useSelector } from "react-redux";

export default function FirstData(){
    const weather = useSelector((state)=>state.weather);

    return(
    <div className="grid grid-cols-3 border border-4 border-black">
        <div id="meta_data" className="flex flex-col ml-5 col-span-2">
            <img src={weather.weather.current.condition.icon} className="h-20 w-20"></img>
            <h2>{weather.weather.current.condition.text}</h2>
            <h3>Morning</h3>
        </div>
        <div id="temperature" className="flex flex-col justify-center items-start col-span-1">
            <div id="temperature_real" className="text-7xl font-bold">{weather.weather.current.temp_c}º</div>
            <div id="temperature_feel" className="">Feels like {weather.weather.current.feelslike_c}º</div>
        </div>
      </div>
    )
}